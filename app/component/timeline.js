"use client";
import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import LaptopIcon from "@mui/icons-material/Laptop";
import WebAssetIcon from "@mui/icons-material/WebAsset";
import CodeIcon from "@mui/icons-material/Code";
import SchoolIcon from "@mui/icons-material/School";
import Typography from "@mui/material/Typography";

export default function CustomizedTimeline() {
  return (
    <Timeline position="alternate">
      <TimelineItem>
        <TimelineOppositeContent sx={{ m: "auto 0" }} align="right" variant="body2" color="text.secondary">
          Sep 2023 - Dec 2023
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary">
            <CodeIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography variant="h6" component="span" fontWeight="bold">
            Full Stack Developer(Part-Time)
          </Typography>
          <Typography style={{ color: "grey", fontSize: "15px" }}>Triomine Pte. Ltd</Typography>
          <Typography component="div" style={{ fontSize: "15px" }}>
            <div>
              <p>
                &#8226;Developed Progressive Web App pages from scratch with React, aligning meticulously with Figma designs, securing managerial
                approval for attention to detail.
              </p>
              <p>&#8226;Leveraged React and Redux for robust frontend architecture, ensuring scalable state management and enhanced interactivity.</p>
              <p>
                &#8226;Led Python-based web scraping efforts, extracting data for seamless frontend integration, enhancing user experiences with
                dynamic content.
              </p>
            </div>
          </Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent sx={{ m: "auto 0" }} align="right" variant="body2" color="text.secondary">
          June 2023 - Oct 2023
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary">
            <WebAssetIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography variant="h6" component="span" fontWeight="bold">
            Freelance Front End Developer
          </Typography>
          {/* <Typography style={{ color: "grey", fontSize: "15px" }}>Heriot Watt University</Typography> */}
          <Typography component="div" style={{ fontSize: "15px" }}>
            <div>
              <p>
                &#8226;Developed and delivered responsive multi-language travel websites using React.js and Next.js, exceeding client expectations.
              </p>
              <p>
                &#8226;Employed Tailwind CSS and Material UI to craft a modern and visually appealing design, achieving a 95% user satisfaction rate
                with the interface
              </p>
            </div>
          </Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent sx={{ m: "auto 0" }} variant="body2" color="text.secondary">
          June 2023 - Sep 2023
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="secondary">
            <LaptopIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography variant="h6" component="span" fontWeight="bold">
            Full Stack Web Developer (Internship)
          </Typography>
          <Typography style={{ color: "grey", fontSize: "15px" }}>Triomine Pte Ltd</Typography>
          <Typography component="div" style={{ fontSize: "15px" }}>
            <div>
              <p>
                &#8226;Leveraged Next.js and Material-UI to develop a dynamic and responsive website, seamlessly integrating frontend and backend
                through APIs, ensuring a smooth user experience.
              </p>
              <p>
                &#8226; Employed Selenium and Beautiful Soup to efficiently extract data from diverse websites, enhancing data collection processes
                and facilitating informed decision-making.
              </p>
            </div>
          </Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent sx={{ m: "auto 0" }} align="right" variant="body2" color="text.secondary">
          April 2023 - June 2023
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary">
            <CodeIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography variant="h6" component="span" fontWeight="bold">
            Front End Web Developer (Part Time)
          </Typography>
          <Typography style={{ color: "grey", fontSize: "15px" }}>Triomine Pte Ltd</Typography>
          <Typography component="div" style={{ fontSize: "15px" }}>
            <div>
              <p>
                &#8226; Actively collaborating with Singapore developer team to create over 30 pages in Figma, resulting in a comprehensive and
                well-defined user interface.
              </p>
              <p>
                &#8226; Translated the designed UI into a functional website using React, TypeScript, and Material-UI, effectively bringing the
                client&apos;s vision to life and receiving recognition for delivering an impressive user experience, , resulting in a 20% increase in
                user engagement metrics .
              </p>
            </div>
          </Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent sx={{ m: "auto 0" }} align="right" variant="body2" color="text.secondary">
          Jan 2021 - July 2021
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="secondary">
            <SchoolIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography variant="h6" component="span" fontWeight="bold">
            Programming Tutor
          </Typography>
          <Typography style={{ color: "grey", fontSize: "15px" }}>Heriot Watt University</Typography>

          <Typography component="div" style={{ fontSize: "15px" }}>
            <div>
              <p>&#8226; Selected by lecturer to tutor 20 students in HTML, CSS, JS, and Java.</p>
              <p>&#8226; Successfully guided over half of the students to achieve high grades in their final assessments.</p>
            </div>
          </Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
