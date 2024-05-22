---
layout: archive
title: "Course Works"
permalink: /courses/
author_profile: true
---

{% include base_path %}

{% for post in site.courses reversed %}
  {% include archive-single.html %}
{% endfor %}
