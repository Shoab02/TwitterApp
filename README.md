Prerequisites
Please make sure you have knowledge about the following:

Node.js installed on your machine. https://nodejs.org/en/
Metamask wallet extension installed. https://metamask.io/
Knowledge about how ETH Blockchain works. https://ethereum.org/en/

Project Overview
In this article, we will first write our own Solidity-based Smart Contract, Deploy that Smart Contract on ETH blockchain and then build a Twitter clone web app that allows us to tweet and view all the tweets.
To view a detailed video about the project: https://www.youtube.com/watch?v=NhZDtKaMSAU&list=WL&index=1

Backend Project Setup
To get started we need to create a hardhat project. To do so, open your terminal. Create or change into a new empty directory and run the following command:

npm install ethers hardhat @nomiclabs/hardhat-waffle \
ethereum-waffle chai @nomiclabs/hardhat-ethers \
@openzeppelin/contracts dotenv

Next, let’s initialize a new development environment, for this, we will be using the hardhat command:

npx hardhat
After running this command, we will get a bunch of setup questions, just Select Create a basic sample project option and for other options press yes .

Now you should see the following files and folders created for you in your root directory:

hardhat.config.js — The entirety of your Hardhat setup (i.e. your config, plugins, and custom tasks) is contained in this file.

scripts — A folder containing a script named sample-script.js that will deploy your smart contract when executed.

test — A folder containing an example testing script.

contracts — A folder holding an example Solidity smart contract.


Get Ethereum API key using Alchemy
Alchemy is a blockchain developer platform focused on making blockchain development easy. They’ve built a suite of developer tools, enhanced APIs, and superior node infrastructure to make building and running blockchain applications seamless.

To create an API follow the steps:-

1. Sign up at Alchemy. https://www.alchemy.com/
2. Go to Dashboard. https://auth.alchemyapi.io/?redirectUrl=https%3A%2F%2Fdashboard.alchemyapi.io%2F

3. Select the network as rinkeby.

4. After this, copy the HTTP key after the creation of the app on alchemy.

Once the above steps are completed, create a .env file in your project root and store this HTTP key as:

ALCHEMY_RINKEBY_URL = "ALCHEMY_HTTP_API_KEY"
Get your account Private key from Metamask
This private account key is required by our Smart contract deploy script, in order to execute it and take gas fees in ether from our wallet.

Click on the identicon
Select the account you’d like to export
On the Account page, click on the menu (three dots) at the upper right corner
Click on the “Account Details” button
Click “Export Private Key”
 Enter your password and click “Confirm”
Your private key is revealed. Click to copy it, and save it somewhere safe.
Click “Done” to close the screen

