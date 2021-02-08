# Deprecated ⚠️ 

This project has been deprecated in favor of Bar 3.


# BAR 2.0
Bann's Auto Recruitment Bot, with a beautiful web interface to explore and configure. Make sure to only use this application on your own private network. A VPN will NOT help.

# What it does

It provides a simple to use way to send a message to every new player of Politics and War.

# Installation

1. Extract everything from the release. Go to the releases tab to find the newest release.
 
# Running 

1. Double click the BAR executable or run it in your terminal/cmd and minimize it away, you can access it from the link provided in the terminal or command prompt.

2. Make sure to configure your instance by going to the configuration tab in the menu and entering your details.

# Troubleshooting

If you have fixed any error messages on the screen to the best of your ability, contact Bann#3995 on discord, or follow the discord link on https://bsnk.dev

# Developing

1. To install packages run
```npm i```
2. To build run
```npm run build```
3. To test run*
```npm run test```
4. To package for the end-user run
```npm run package```

*You need to write your own config.json in dev/config/config.json with the correct details in it. Use end-user/config/config.json as a template.

# Requirements
1. Use TypeScript for the main code and Mocha with TypeScript for tests.
2. The web app from dist/lib/public is a custom web ui from Bann. It has not yet been released as open-source or under a specific license.
