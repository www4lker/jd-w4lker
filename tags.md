---
layout: Tags
title: Tags
permalink: /tags/
content-type: eg
---
<table>
  <thead>
    <tr>
      <th>Tag</th>
      <th>Posts</th>
    </tr>
  </thead>
  <tbody>
    {% for tag in site.tags %}
    {%- assign conc = tag | first -%}
    {%- if conc != 'Favorite' -%}
    <tr>
      <td><a href="#{{ conc }}">{{ conc }}</a></td>
      <td>{{ tag[1].size }}</td>
    </tr>
    {%- endif -%}
    {% endfor %}
  </tbody>
</table>

{% for tag in site.tags %}
{%- assign conc = tag | first -%}
{%- if conc != 'Favorite' -%}
<h2 id="{{ conc }}">{{ conc }}</h2>
  <ul>
    {% for post in tag.last %}
    <li><a href="{{post.url}}">{{ post.title }}</a></li>
    {% endfor %}
  </ul>
{%- endif -%}
{% endfor %}
