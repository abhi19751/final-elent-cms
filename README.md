Aapke 12-page static website ko multiple languages mein convert karne ke liye, Eleventy ka istemal karte hue, aapko kuch specific configurations aur directory structures set karni hongi. Main aapko step-by-step samjhaata hoon ki kaise aap apne project ko organize kar sakte hain aur automatic language-specific URLs generate kar sakte hain.

1. Directory Structure
Aapko apne project ki directory structure kuch is tarah se set karni hogi:

css
Copy code
├── src/
│   ├── _data/
│   │   ├── en.json
│   │   ├── hi.json
│   ├── pages/
│   │   ├── index.njk
│   │   ├── about.njk
└── .eleventy.js
Explanation:

src/: Yeh aapka source directory hai jahan aapka saara content hoga.
_data/: Is directory mein aap apne language-specific JSON data files rakh sakte hain.
en.json: English content ke liye.
hi.json: Hindi content ke liye.
pages/: Is directory mein aapke page templates honge.
index.njk: Homepage ka template.
about.njk: About page ka template.
.eleventy.js: Eleventy ka configuration file.
2. Language-Specific JSON Data Files
Har language ke liye ek JSON file banaiye jisme aapke pages ka content ho. Jaise:

en.json:

json
Copy code
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
hi.json:

json
Copy code
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
3. Eleventy Configuration (.eleventy.js)
Eleventy ko configure karte hue, aapko language-specific data ko include karna hoga aur custom permalinks set karne honge.

javascript
Copy code
module.exports = function(eleventyConfig) {
  // Language-specific data ko include karna
  eleventyConfig.addDataExtension("json", contents => JSON.parse(contents));

  // Passthrough copy for static assets
  eleventyConfig.addPassthroughCopy("assets");

  return {
    dir: {
      input: "src",
      output: "_site"
    },
    // Template formats aur other configurations
    templateFormats: ["njk"],
    passthroughFileCopy: true,
    markdownTemplateEngine: "njk"
  };
};
4. Language-Specific Templates
Har page ka template (e.g., index.njk, about.njk) mein language-specific content ko render karen.

index.njk:

html
Copy code
<h1>{{ homepage.title }}</h1>
<p>{{ homepage.description }}</p>
about.njk:

html
Copy code
<h1>{{ about.title }}</h1>
<p>{{ about.description }}</p>
5. Automatic Language-Specific URLs
Eleventy mein language-specific URLs generate karne ke liye, aapko custom permalinks set karne honge. Aap apne Eleventy configuration mein permalink property ka use kar sakte hain.

index.njk:

html
Copy code
---
permalink: "{{ lang }}/index.html"
---
<h1>{{ homepage.title }}</h1>
<p>{{ homepage.description }}</p>
about.njk:

html
Copy code
---
permalink: "{{ lang }}/about/index.html"
---
<h1>{{ about.title }}</h1>
<p>{{ about.description }}</p>
Is tarah se, jab aap Eleventy ko build karenge, to har language ke liye alag URLs generate ho jayenge, jaise:

/en/index.html (English homepage)
/en/about/index.html (English about page)
/hi/index.html (Hindi homepage)
/hi/about/index.html (Hindi about page)
6. Language Switching
Aap apne pages mein language switcher implement kar sakte hain, jise user select karein aur page ko switch karein. Aap URL parameters ya cookies ka use kar sakte hain, jaise /?lang=en, /?lang=hi, etc.

7. Build and Deployment
Jab aap Eleventy ko build karenge, to har language ke liye alag pages generate honge jo aapke specified URLs par available honge. Aap apne static site ko kisi bhi hosting platform par deploy kar sakte hain.

Agar aapko koi aur specific help chahiye ho to please bataiye!
