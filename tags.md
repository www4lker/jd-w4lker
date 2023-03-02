---
layout: Post
title: Tags
permalink: /tags/
content-type: eg
---
![capa](https://i.postimg.cc/4357yWK6/Camada-6.png)

<table>
  <thead>
    <tr>
      <th>Hashtags</th>
      <th>Postagens relacionadas</th>
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
<h4 id="{{ conc }}">{{ conc }}</h4>
  <ul>
    {% for post in tag.last %}
    <li><a href="{{post.url}}">{{ post.title }}</a></li>
    {% endfor %}
  </ul>
{%- endif -%}
{% endfor %}
