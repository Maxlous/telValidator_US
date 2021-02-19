# Solution for Telephone Number Validator (US) Project on FreeCodeCamp without Regular Expressions

- Even though Hint 1 for the project says “There is no way around it, you will need to brush up your regular expressions skills,” there is a way! Since I don't like using regular expressions that much, I tried to solve the problem without ever using them. I know it means more code, but it is an alternative for those who is like me. So far did not see anybody solve the problem with this way, thus, thought to share it. Feel free to check it out, and give feedback for possible readjustments!

## Project Description

- Return true if the passed string looks like a valid US phone number.

- The user may fill out the form field any way they choose as long as it has the format of a valid US number. The following are examples of valid formats for US numbers (refer to the tests below for other variants):

---

- 555-555-5555
- (555)555-5555
- (555) 555-5555
- 555 555 5555
- 5555555555
- 1 555 555 5555

---

- For this challenge you will be presented with a string such as 800-692-7753 or 8oo-six427676;laskdjf. Your job is to validate or reject the US phone number based on any combination of the formats provided above. The area code is required. If the country code is provided, you must confirm that the country code is 1. Return true if the string is a valid US phone number; otherwise return false.

![Possible Inputs 1](https://github.com/Maxlous/telValidator_US/blob/main/ss1.PNG)
![Possible Inputs 2](./ss2.png)
