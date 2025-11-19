---
sidebar_position: 1
---
# Varaham introduction

**Varaham - Education & Online Courses WordPress Theme**

![varaham-featured.png](img/varaham-featured.png)

Varaham is a modern Moodle education theme for your website. It is a stunningly flexible, perfect and extensive education theme which is the perfect solution for those who love to represent their organization such as school, college, training courses, corporate training, university etc…

It is 100% responsive, clean, sharp fluid, exclusive and royal theme. It provides more customizable sections in the front page which users can customize through the backend setting panel.
It offers many customizable features and is enhanced and updated regularly with new features.

First, thank you for choosing Varaham theme for Moodle. Varaham is a Bootstrap based theme with a sharp design and it offers various style and layout options. I hope that you will be satisfied with it.

This documentation should help you get started. It covers everything you need to know to get the theme up and running. Please read this documentation thoroughly, if you still experience any difficulties please get in touch via support email support@templaza.com or access to our ticket system:

[Support Varaham Moodle Theme](https://www.templaza.com/tickets.html)

## Installation & Demo Import

Upload and install via ZIP file
1. Login to your Moodle site as an admin.
2. Go to Site administration > Plugins > Install plugins.
3. In your downloaded package from ThemeForest, open the folder Theme. Choose the appropriate upload file for your Moodle version:
4. Upload the ZIP file in the folder.
5. Check the plugin validation report, then click the button 'Install plugin'.

![varaham-theme-installation.png](img/varaham-theme-installation.png)

## Changing the default theme

**The theme selector**

An administrator can set a theme for the site from Site **_administration > Appearance > Themes > Theme selector_**.

Go to **_Site administration > Appearance > Themes_**

- Click on the **_"Select theme"_** button on the preview of each theme.
- Scroll down to see the previews of the available themes and click on the "Use theme" button to choose the theme
- The next screen will provide information about the theme. Click "Continue"

`Note: The selected theme may be overridden if user/course or category themes have been allowed in the Moodle core theme settings.
`
## Adding The Menu

**Advanced Theme Settings**

An administrator can add the menu via the Moodle theme settings in Site administration > Appearance > Advanced Theme settings.

![varaham-menu.png](img/varaham-menu.png)

**Custom menu items**

You are able to create the custom menu by entering custom menu items one per line into the setting. Each item which is preceded by a hyphen (-), will appear on a drop down menu below the previous top level item. So items that are NOT preceded by a hyphen appear on the top level of the menu (always visible).

The content of each item is constructed of up to three bits, each separated by a | (Shift + \) character. The bits are label | url | tooltip.

- **label**: This is the text that will be shown within the menu item. You must specify a label for every item on the menu.
- **url**  This is the URL that the user will be taken to if they click the menu item. This is optional, if not provided then the item will not link anywhere.
- **tooltip**  If you provide a URL you can also choose to provide a tooltip for the link that is created with the URL. This is optional and if not set the label is used as the tooltip for the menu item.

The following is an example of how you would create a custom menu:

Courses 
- All courses|/course/index.php 
- Course search|/course/search.php 
- About us | /mod/page/view.php?id=49
Pages 
- Our Gallery | /mod/page/view.php?id=79 
- FAQ Page | /mod/page/view.php?id=155 
- Login Page | /login/index.php