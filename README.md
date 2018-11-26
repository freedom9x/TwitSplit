
# TwitSplit
## Description
- The product Tweeter allows users to post short messages limited to 50
characters each.
- Sometimes, users get excited and write messages longer than 50 characters.
- Instead of rejecting these messages, we would like to add a new feature that will
split the message into parts and send multiple messages on the user's behalf,
all of them meeting the 50 character requirement.

## Architecture
- App build like a Single Page Application, with 3 Layers: 
  1. View (React components)
  2. Application Services (Message Services)
  3. Domain (Message domain)
- App's layout has 4 UI components: header(top), leftColum(left), message area(center), rightColumn(right):

![layout](https://user-images.githubusercontent.com/5037791/49032722-e6fad780-f1df-11e8-88cd-6b275dc223ed.png)

## Spliting Message Algorithm

## Following steps:
1. Set l to message length, msgs to []
2. If l <= maxLength return message. Then go to step 7
3. Set i to l/maxLength
4. Try slipt message into i parts,save them into msgs. If success then go to step 7
5. Set i = i + 1
6. If i < l then go to step 4 
7. Return msgs

## Algorithm in step 4: Split message to i parts 
1. Set index to 0, indicator to "index/i", remaining to message, msgs to []
2. if remaining.length <= 0 then go to step 8
3. Set index = index + 1, indicator to "index/1"
4. Split remaining into 2 parts
5. Find the longest valid message in remaining, if fail then go to step 7
6. Push the valid message to msgs,then set remaining = "(remaining - first part)", then go to step 2
7. Return []
8. Return msgs


## How to start project in developer mode

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

In the project directory:

1. install all dependencies 

     `yarn`
2. Start app in localhost

     `yarn start`
     
2. Run unit tests

     `yarn test`
