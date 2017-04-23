---
layout: page
permalink: /about/
title: About
tags: Todd Miller, Scrum Course, Scrum Training, Scrum Courses New York, Scrum Courses Pennsylvania, Scrum Courses Maryland, Scrum Courses Virginia, Scrum Courses New Jersey
description: Todd Miller Professional Scrum Trainer for Scrum.org offering Scrum Training and Scrum Courses in the Northeastern United States.
chart: true
---

{% assign total_words = 0 %}
{% assign total_readtime = 0 %}
{% assign featuredcount = 0 %}
{% assign statuscount = 0 %}

{% for post in site.posts %}
    {% assign post_words = post.content | strip_html | number_of_words %}
    {% assign readtime = post_words | append: '.0' | divided_by:200 %}
    {% assign total_words = total_words | plus: post_words %}
    {% assign total_readtime = total_readtime | plus: readtime %}
    {% if post.featured %}
    {% assign featuredcount = featuredcount | plus: 1 %}
    {% endif %}
{% endfor %}

<span>
<img src="/images/todd-miller.png" align="left" style="margin:0px 50px 0px 0px" />

Hi my name is Todd Miller and I am a Professional Scrum Trainer for Scrum.org and owner of Xperient Software LLC. I am located in York, Pennsylvania which makes me easily accessible for training throughout the Northeastern United States.

### About Me
I have experience as a Scrum Master, Product Owner, Agile Coach and Developer on variety of technical and creative projects across a multitude of industries. At present I train and coach enterprises and teams across the United States on the Scrum framework, enterprise agile transformation and professional software development. On the technical side, I have development experience in the Microsoft .NET technology stack, Team Foundation Server and Visual Studio Team Services.

### Contact Me
For all inquiries email me at <a href="mailto:todd@xperientsoftware.com" target="_top">todd@xperientsoftware.com</a> For a detailed history of my work visit my <a target="_blank" href="https://linkedin.com/in/todd-miller-16996420">LinkedIn Profile</a>.

This website is developed using GitHub Pages and made beautiful with the Jekyll theme [https://github.com/codeinventory/codeinventory.github.io](https://github.com/codeinventory/codeinventory.github.io).
