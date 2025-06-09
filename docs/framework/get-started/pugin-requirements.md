---
sidebar_position: 2
---

# Plugin Requirements

After installing the theme file, you will get a notification about installing required plugins. You go to **Plugins > Install Plugins** to install them.

## TemPlaza Framework & UI Pro
We use TemPlaza Framework for global styles and scripts and UI Pro for Elementor Widgets. They are required for all themes of TemPlaza.

Click "Begin installing plugins" to install plugins required Click Install to start the process.

## Elementor
Since Alita theme, we use Elementor plugin - the best free page builder to build pages instead of WPBakery Page Builder.

You can install Elementor via **wp-admin -> Plugins -> Add New -> Search "Elementor"**

Refer to its website to learn more about this plugin: [Elementor Getting Started](https://elementor.com/getting-started)

## Redux Framework
We use **Redux Framework** for theme options.

You can install Redux via wp-admin -> Plugins -> Add New -> Search "Redux"

## Advanced Products
Most of the latest themes built with Advanced products plugin such as: **Autoshowroom 3.x, Autobike, Amanus, Probike, Plazart, Koer, Baressco, Agruco, Travelami, and Kamper.** Advanced products is a core important plugin that allows you to create and manage different types of products with a system of custom fields.

## For old themes - Auto Showroom, InteriArt, Meetup, Aventura

### WPBakery Page Builder
This plugin has already been included in the theme package. After installing and activating the theme, you can install this plugin normally in **Plazart Installation** part.

**You can use it freely WITHOUT A LICENSE. In case you want to activate Live Update, please buy a license for this plugin.**
Refer its documentation here: [WPBakery Page Builder Documentation](https://wpbakery.com/features/support/visual_composer_documentation/)

### Revolution Slider

Similarly, you can install this plugin in **Plazart Installation part and use it WITHOUT A LICENSE.**

Refer it documentation: [Revolution Slider Documentation](https://www.sliderrevolution.com/help-center/?utm_source=themepunch.com&utm_medium=flbuy)

### Contact form 7
- [Documentation](https://contactform7.com/docs/)
- Add new form: Go to **Dashboard > Contact > Add New**
- In this theme, there is 1 demo contact form used on **Vehicle Detail Page:**
```php

<div class="request-infomation">
<div class="car-detail">
[hidden title]
</div>
<div class="row">
<div class="col-md-6">
<p>Your Name <em>*</em><br />
[text* your-name placeholder "John Doe"] </p>

<p>Your Email <em>*</em><br />
[email* your-email placeholder "johndoe@gmail.com"] </p>

<p>Phone number <em>*</em><br />
[text* your-phone placeholder "+1-888-456-8888"] </p>

</div>
<div class="col-md-6">
<p>Your Message<br />
[textarea your-message] </p>
</div>
<p class="btn">[submit "Submit Form"]</p>
</div>
</div>

```
