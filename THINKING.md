# Engineering Reflection

## 1. What assumptions did you make?

I assumed that the data I needed to display on the dashboard would be available through the provided fake API.

However, the data required by the design was not available in the provided API. Because of this, I used mock data to represent the information that was not available while keeping the structure flexible enough to be connected to a real API later.

I also assumed that student information could be retrieved dynamically from the fake Api.



## 2. What was the hardest part?

The hardest part was initially figuring out how the overall user interface should look and how the available data should be presented effectively.

I had to think about how to structure the dashboard so that the information was easy for students to understand and navigate. I also had to decide how different types of information should be represented through components such as cards, navigation items, tables, and other dashboard elements.

This required me to think beyond simply displaying the data and consider the overall user experience and visual hierarchy.



## 3. If you had another week, what would you improve?

If I had another week, I would connect the dashboard to a real backend API and implement real authentication.

I would also add the remaining authentication flows, such as student registration, email verification, and password recovery, so that each student could have a personalized account and access their own information.





## 4. What would you refactor first?

I would first refactor the user information so that it is not hard-coded within the interface.

For example, the student's name is currently displayed as static text. I would move this information into a user data structure and eventually retrieve it from the authenticated user's profile through an API or shared application state.

This would allow the dashboard to dynamically display information such as the student's name and profile image.

After that, I would add a profile section where students can update their personal information and upload or change their profile image. I would also add a sign-up flow so that user information can be collected and associated with each student's account.



## 5. What AI tools, if any, did you use, and how did they help?

I used ChatGPT and Google Gemini as development assistance during the assessment.

I mainly used them to help me explore implementation approaches, troubleshoot issues,  and think through UI decisions.



## 6. What did you deliberately choose not to build, and why?

I deliberately chose not to build the additional authentication flows, such as sign-up, email verification, and password recovery, because the provided API did not include the backend functionality required to support these features.

Rather than creating authentication flows that could not be properly connected to a backend, I focused on implementing the core dashboard experience, including the login interface, navigation, responsive layout, and presentation of the available student data.

These features could be added once the appropriate backend authentication endpoints are available.



