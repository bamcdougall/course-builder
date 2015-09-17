<h1>Security</h1>

Cross-site request forgery, also known as XSRF or CSRF, is a malicious attack that tries to exploit the relationship between a website and a user’s browser. Course Builder implements protection against XSRF using transient user-action specific tokens for all state-modifying HTTP operations supported by the product.

You should modify the default token by taking the following steps:

  1. Go to **Site admin > Site settings > CSRF secret** and click **Edit**.
  1. Change the value of the token from its default value. The default value is randomly generated.
  1. Select **Active** in the **Status** box.
  1. Click the **Save** button.

You will not have to change this token again. If you choose to do so, do not change this token while students or course authors are interacting with the course. Any requests left hanging before the value change will not go through. For example, if the user is editing an announcement while the CSRF token value is being changed, then the announcement edit request will not go through. The user will have to make the edit again.

Note that full in-depth security review has not yet been conducted. You should conduct independent security testing and take additional steps to secure your production site. If you find an issue, please report it immediately to the development team for assessment and resolution.