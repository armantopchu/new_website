---
categories:
- "1"
- "2"
date: "2021-21-10T22:26:13-05:00"
description: Client Inputs
draft: false
keywords: ""
slug: submit-form
---

# Client Inputs

<form name="contact" method="post" data-netlify="true" action="submit-form" onsubmit="return validateForm()">
  <label for="first_name">First Name:</label>
  <input type="text" id="first_name" name="first_name" required><br>

  <label for="surname">Surname:</label>
  <input type="text" id="surname" name="surname" required><br>

  <label for="fee">Fee (%):</label>
  <input type="text" id="fee" name="fee" pattern="\d+(\.\d{1,2})?" title="Enter a valid percentage" required><span></span><br>

  <input type="submit" value="Submit">
</form>

<script>
  function validateForm() {
    // You can add custom JavaScript validation here
    // Return false if validation fails to prevent form submission
    return true;
  }
</script>

