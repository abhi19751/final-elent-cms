1. src/_includes/base.njk

<!DOCTYPE html>
<html lang="{{ lang }}">
<head>
  <meta charset="UTF-8">
  <title>{{ title }}</title>
  <meta name="description" content="{{ description }}">
  <meta name="keywords" content="{{ keywords }}">
  {% if canonical %}
    <link rel="canonical" href="{{ canonical }}">
  {% endif %}

</head>
<body>
  {% block content %}{% endblock %}
</body>
</html>


2. .eleventy.js

module.exports = function(eleventyConfig) {
  eleventyConfig.addDataExtension("json", contents => JSON.parse(contents));

  eleventyConfig.addPassthroughCopy("assets");

  return {
    dir: {
      input: "src",
      output: "_site"
    },

    templateFormats: ["njk"],
    passthroughFileCopy: true,
    markdownTemplateEngine: "njk"
  };
};

const sitemap = require("@quasibit/eleventy-plugin-sitemap");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(sitemap, {
    sitemap: {
      hostname: "https://example.com",
    },
  });
  // Additional configurations
};





3._data/en.json

{
  "homepage": {
    "title": "Welcome to Our Tool",
    "description": "This is a powerful tool for social media platforms."
  },
  "about": {
    "title": "About Us",
    "description": "We provide tools for enhancing your online experience."
  }
}



4. _data/hi.json

{
  "homepage": {
    "title": "हमारे टूल में स्वागत है",
    "description": "यह एक शक्तिशाली टूल है जो सोशल मीडिया प्लेटफ़ॉर्म्स के लिए है।"
  },
  "about": {
    "title": "हमारे बारे में",
    "description": "हम आपके ऑनलाइन अनुभव को बढ़ाने के लिए टूल प्रदान करते हैं।"
  }
}


page/index.njk
---
layout: base.njk
permalink: "/{{ lang }}/{{ page.fileSlug }}/"
---


{% block content %}
<h1>Welcome!</h1>
<p>This is the homepage.</p>
{% endblock %}


5. src/sitemap.njk

---
permalink: {{ lang }}/sitemap.xml
eleventyExcludeFromCollections: true
---

{% sitemap collections.all %}
