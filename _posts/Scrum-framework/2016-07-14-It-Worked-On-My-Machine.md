---
author: Todd Miller
linkedin_username: todd-miller-16996420
layout: post
title: "It Worked on my Machine"
date: 2016-07-14 12:30
comments: true
description: Taking a look at the engineering practices and DevOps in an effort to create an open culture of trust
category: Scrum-Framework
imagefeature: Programming-Code-l.jpg
tags:
- DevOps
- Scrum
- Culture
- Agile
- Todd Miller
---

[//]: # (Situation)
It's interesting that I still hear "but it works on my machine" or some variation frequently in software development. It may be a developer that gets the latest code from source control and can't compile it or a team that has everything working locally but not in a deployment environment. Companies all over the world are hard at work to create tools to bridge the gap between development and operations teams. Yet this is a recurring problem regardless of the sophisticated tooling an organization has decided to adopt.

[//]: # (Complication)
This is not a minor problem. Here are two examples which cost organizations a lot of time and money:

### 1 - The Load Balanced Environment
I worked with a very good development team that had agile engineering practices implemented with purpose: continuous integration builds, automated testing, automated deployments to lower level environments, emergent architecture using SOLID principles, etc. Sprint after Sprint they delivered "done" increments of "potentially shippable" product. The way it should be!

When the Product Owner said "ship it into production" we were all excited. Thoroughly tested and bullet proof we couldn't wait to delight the customer. With the click of a button the software went into production. Some odd hours later the customers started reporting issues of being "auto-magically" logged out of the website.

Everyone on the team dug in and began troubleshooting the issue. Several hours of examination and we determined that we never engineered the software in a way that it could operate in a load balanced environment; the production environment was load balanced across four servers. There are many ways this could have been prevented. The lower level environments did not replicate the production environment nor did we ever talk to operations to consider these types of things.

The end result was a bad customer experience, the re-engineering of parts of the application in a "fire-fighting" mode and a demoralized team. Likewise, it cost the company a lot of money and time. This could have been prevented.

### 2 - Signal Strength
I was recently speaking with a team that was very proud of the hard work and dedication they put into developing a mobile application. Engineering practices were tight, it was thoroughly tested and "done" every increment, and it was ready to be launched ahead of an anticipated release date. The Product Owner wanted to get early feedback and targeted a particular geographic region to do so. Perfectly agile and good practice to release early and often.

The release went off without a problem and customers loved it. However, once a customer entered the location where it was to be most heavily used it became apparent that there was typically a lack of cellular signal strength in such locations. The application relied heavily on back end web services and seized to function at the most important time.

Not only was this a bad customer experience but the feasibility of everything that had been built now came into question. The challenge of resolving the issue fell on the laps of operations whom, in an emergency, had to quickly install Wi-Fi access points so customers could use the application. An expensive fix, a blame game across the board, team morale was low and it cost the company a lot of money. This could have been prevented.

[//]: # (Question)

### How can these scenarios be prevented?
Two great Scrum Teams doing all the right things but what happened? Let's consider the phase gated stages of waterfall for which we're trying to move past in software development:

+ Analysis
+ Design
+ Development
+ Testing
+ Deployment

Each of the above stages requires sign off before the next stage begins. In Scrum, these stages don't exist; we do analysis, design, development, testing and deployment (hopefully at minimum to lower level environments) in thirty days or less. Is it safe to say in both of these scenarios the teams failed to fully consider deployment? Would they have been better bringing a team member from operations into the Scrum Team or at least having them as a stakeholder in Sprint Reviews? My opinion is yes.

[//]: # (Answer)
We could blame the teams for not considering every technical element however software development is complex. I believe these teams didn't fully have a comprehension of what a truly "done" increment of working software was. In order to have that full consideration a team must be cross-functional; they have all the skills necessary to delivery a "done" increment which has no more work left to reach production.

We all come from different backgrounds and experiences. That leads us all to ask different questions and take into consideration things that not each individual person might think of. That's the beauty of Scrum which is upheld by the Scrum values (Openness, Courage, Respect, Focus, Commitment).

We have to break down the silos that still exist. This is a cultural problem that exists in a lot of organizations today. Years ago we tackled the development/test silo problem. I believe it's now time to tackle the development/test/operations problem.
