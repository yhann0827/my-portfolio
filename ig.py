import re
from bs4 import BeautifulSoup
import requests
import time
import urllib.parse
import json

def get_post_details(shortcode):
    base_url = 'https://www.instagram.com/graphql/query/?doc_id=18222662059122027&variables='

    variables = {
        "child_comment_count": 3,
        "fetch_comment_count": 40,
        "has_threaded_comments": True,
        "parent_comment_count": 24,
        "shortcode": shortcode  
    }
    variables_str = json.dumps(variables)
    encoded_variables = urllib.parse.quote(variables_str)
    full_url = base_url + encoded_variables

    response = requests.get(full_url)

    doc = BeautifulSoup(response.text, 'html.parser')

    doc_str = str(doc)
    
    match_video_view_count = re.search(r'"video_view_count":\s*(\d+)', doc_str)
    if match_video_view_count:
        video_view_count = match_video_view_count.group(1)
    match_video_play_count = re.search(r'"video_play_count":\s*(\d+)', doc_str)
    if match_video_play_count:
        video_play_count = match_video_play_count.group(1)
    match_is_video = re.search(r'"is_video":\s*(true|false)', doc_str)
    if match_is_video:
        is_video = match_is_video.group(1)  
    match_display_url = re.search(r'"display_url":"(https://[^"]+)"', doc_str)
    if match_display_url:
        display_url = match_display_url.group(1) 
    match_like_count = re.search(r'"edge_media_preview_like":{"count":\s*(\d+)', doc_str)
    if match_like_count:
        like_count = match_like_count.group(1) 
    match_comment_count = re.search(r'"edge_media_preview_comment":{"count":\s*(\d+)', doc_str)
    if match_like_count:
        comment_count = match_comment_count.group(1) 
    match_owner_id = re.search(r'"viewer_can_reshare":(true|false).*?"owner":{"id":"(\d+)"', doc_str)
    if match_owner_id:
        owner_id = match_owner_id.group(2)

    print("Video View Count:", video_view_count)
    print("Video Play Count:", video_play_count)
    print("Is Video:", is_video)
    print("Display URL:", display_url)
    print("Like Count: ", like_count)
    print("Comment Count: ", comment_count)
    print("Owner ID: ",  owner_id)




# url = 'https://www.instagram.com/graphql/query/?doc_id=17991233890457762&variables={%22id%22:%2253700967289%22,%22first%22:12}'
# url='https://www.instagram.com/graphql/query/?doc_id=17991233890457762&variables={"id":"53700967289","first":50, "after":"QVFDSFFRZnVHUDFEN3hELTI0VEVLWXdMNjFPaUFudnQ2ZkZabXZVcHp2a0otMFQ4TGpwd2hSd0R4SGJCRHg2RzVMZHl6VERfcUpjM1pWOV8yVzRWWTEydg=="}'
def get_profile_details(profile_id, first_value, after=None):
    base_url = 'https://www.instagram.com/graphql/query/?doc_id=17991233890457762&variables='

    # Create a dictionary for the variables
    variables = {
        "id": profile_id,
        "first": first_value
    }
    if after is not None:
        variables["after"] = after
    variables_str = json.dumps(variables)
    encoded_variables = urllib.parse.quote(variables_str)
    full_url = base_url + encoded_variables

    response = requests.get(full_url)

    doc = BeautifulSoup(response.text, 'html.parser')

    doc_str = str(doc)
    
    match_has_next_page = re.search(r'"has_next_page":\s*(true|false)', doc_str)
    if match_has_next_page:
        has_next_page = match_has_next_page.group(1)
        if has_next_page == "true":  # Check if has_next_page is "true" as a string
            match_end_cursor = re.search(r'"end_cursor":"([^"]+)"', doc_str)
            if match_end_cursor:
                end_cursor = match_end_cursor.group(1)
                print("End Cursor:", end_cursor)

    timestamps = []
    shortcodes = []
    texts = []
    urls = []

    for match_timestamp in re.finditer(r'"taken_at_timestamp":\s*(\d+)', doc_str):
        timestamp = match_timestamp.group(1)
        timestamps.append(timestamp)

    for match_shortcode in re.finditer(r'"shortcode":"([^"]+)"', doc_str):
        shortcode = match_shortcode.group(1)
        shortcodes.append(shortcode)

    for match_text in re.finditer(r'"node":{"text":"([^"]+)"', doc_str):
        text = match_text.group(1)
        texts.append(text)

    for match_url in re.finditer(r'"display_url":"([^"]+)"', doc_str):
        url = match_url.group(1)
        urls.append(url)

    for i in range(len(timestamps)):
        print("Timestamp:", timestamps[i])
        print("Shortcode:", shortcodes[i])
        print("Text:", texts[i])
        print("Display URL:", urls[i])
        print()


shortcode = 'CwoVKkuS4J_'
profile_id = "53700967289"
first_value = 12
after_value = "QVFDSFFRZnVHUDFEN3hELTI0VEVLWXdMNjFPaUFudnQ2ZkZabXZVcHp2a0otMFQ4TGpwd2hSd0R4SGJCRHg2RzVMZHl6VERfcUpjM1pWOV8yVzRWWTEydg=="
get_profile_details(profile_id, first_value, after_value)
# get_profile_details(profile_id, first_value)
# get_post_details(shortcode)