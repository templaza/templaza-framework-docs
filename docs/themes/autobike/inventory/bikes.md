---
sidebar_position: 1
---
# Inventory

We built the inventory data with Advanced Products plugin, so you should make sure this plugin is installed on your site.

> This page is not included in the page list because it is created by a custom link.

## 1.Create product branches

**Creating a product branch is compulsory**, so you should not miss this step. Please go to WP-admin > Advanced Products > Branch

On the left, you will see a form to create a new branch, let's enter the branch name and other info.

Group field assignment: you should assign the branch to one or more custom group fields that are (are) created in the Custom Group Field section.

![Inventory](./img/add-branch.jpeg)

## 2.Create custom field groups

Advanced Products uses field groups to attach fields to each product. 

* Please go to WP-admin > Advanced Products > Custom Field Group
* You will see a form on the left to create a new Field Group. Enter the name of the field group and other info.
* Associated Branch: Select one or more branches that connect with the field groups.

![Inventory](./img/group-field.jpeg)

## 3.Create product's custom fields

![Inventory](./img/custom-field.avif)

To create new custom fields, you should go to WP-admin > Advanced Products > Custom Fields > Add New

* Input a field label, and choose a field type.
* Required? Choose Yes if this field is compulsory, otherwise, choose No.
* Icon: choose an icon for the field. Leave it blank if you uploaded an icon image.
* Icon image: upload an icon image for the field chosen to be displayed in the listing view.

### 3.1 Many different field types

You can choose between 25 different input types to add to custom fields, including text boxes, number fields, dropdown lists, checkboxes, radio buttons, image swatches, color swatches, date fields, and file upload.

* **Text** – A normal text input field to collect single-line text
* **Text area** – To collect multi-line text
* **Email** – An input field to accept only email addresses
* **Password** - A single-line text field whose value is obscured. Will alert a user if site is not secure.
* **URL** – A text field to accept only links (URLs)
* **Number** – A number field to accept both decimal or whole numbers
* **Select (drop-down)** – A dropdown field to select one option from a list of options Checkboxes – To choose one or more options
* **Radio buttons** – To select one option from multiple options
* **True/false** – A single “yes or no” checkbox, which you usually know from “accept the terms of conditions” fields
* **Paragraph** – If you want to add static blocks of text in between input fields, this does the trick!

### 3.2 Custom field groups assignment

Besides protected custom fields (Video, Gallery, Category, Branch, and Price), all new custom fields created should be assigned to specific field groups. 

![Inventory](./img/group-assign.avif)

### 3.3 Configure field display

By configuring the field display options, you can decide whether the custom field is shown in the listing view and search view or not. 

![Inventory](./img/field-display.jpeg)

## 4.Custom Categories

In the custom categories section, you can create custom types of taxonomies that are useful when one wants to create distinct naming systems and make them accessible behind the scenes. 

Here I created a custom category for Make and Model. Make is supposed to be associated with branch, while model should be associated with make. 

![Inventory](./img/custom-cat.jpeg)

:::note

After creating new custom categories, you should go to the Custom Field section, and create corresponding custom fields with taxonomy field type.

:::

## 5.Create advanced product Makes

![Inventory](./img/product-make.jpeg)

## 6.Add advanced product Models

To add a new model, please go to Wp-admin > Advanced products > Models > Add new. 

When adding a new model, you're supposed to assign the model to a corresponding make.

![Inventory](./img/product-model.jpeg)

## 7.Add a new advanced product

Go to **Advanced Products > Add New** to create new products. 

* Enter the product's name
* Upload a featured image
* Properties: You should choose the product's branch, make, and model.
* Add images to the product gallery.
* Overview: Input the content for the product overview.
* Featured Options: Input the content for the product's featured options.
* Video: Input the video content for the product.
* Pricing: Choose a product type, input a price value, MSRP Price, and price notice.

![Inventory](./img/product-add.jpeg)

:::note

In case custom fields do not show up properly, you should go to the Custom Fields section, and click to save each custom field again. As a last resort, please contact us to get support.

:::
