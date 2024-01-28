---
categories:
- "1"
- "2"
date: "2021-21-10T22:26:13-05:00"
description: Client Inputs
draft: false
keywords: ""
slug: acknowledgements
title: acknowledgements
---

# Your Page Content

# Your Page Content

<form name="contact" netlify>
  <label for="first_name">First Name:</label>
  <input type="text" id="first_name" name="first_name" required><br>

  <label for="surname">Surname:</label>
  <input type="text" id="surname" name="surname" required><br>

  <label for="fee">Fee (%):</label>
  <input type="text" id="fee" name="fee" pattern="\d+(\.\d{1,2})?" title="Enter a valid percentage" required><span>%</span><br>

  <input type="submit" value="Submit">
</form>

