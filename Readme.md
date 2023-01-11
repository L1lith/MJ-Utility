# MidJourney Utility
This is a collection of tools to help craft [MidJourney](https://midjourney.com/home/?callbackUrl=%2Fapp%2F) prompts.

## Setting Up
First, if you haven't already install [the LTS version of NodeJS.](https://nodejs.org/en/) After that's done, [follow these instructions to install git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git).

To use this project, you will need to run terminal (called command prompt on Windows) commands in the project folder. First we will need to use the terminal to download this project. Once you have the terminal open type this command and hit enter to check your current directory:
```
pwd
```

It tells me my terminal is currently located at `/Users/l1lith` (my home folder) but I want to download the project into my Documents folder so I'll use the `cd` command:
```
cd Documents
```

Next I'm going to download the MidJourney Utility:
```
git clone https://github.com/L1lith/MJ-Utility
```

Once that has completed you will need to move your terminal into the project folder:
```
cd MJ-Utility
```

The final step is you will need to install the dependencies and you will be ready to go :)
```
npm install
```
There you go, we should be ready to run commands!

## Commands
### Prompt Scramble
To create a prompt with a lot of entropy you can use the prompt scramble command. Just run `npm run scramble` in your terminal (it needs to be in the project folder though) It should generate something like this:
```
::6.36,Kovokibune Pijimokiki Nahakoqeso Dexezimole Xuhafebagi Zaziquvute Bagocujusu::0.27,Vitobusone Qemizazuqu Jerufobahu Foqomogiyu Cigohegaba Koyagojoro::-0.65,Lusuyejemi Duporanoni Fubagewuna Qivuqobaye Hodorila!+::0.61,Xusifulofo Lukuwenebe Bokoroguxe::-0.96,Mijeqofoha Tunesiyuko Rawaqifidu::0.99,Dotevinuhe Yivenekuhu Nahucowigu::-0.93,Yat^%uzega Cav!gesuzu Cewuqeqonu Kehewuqepu Zafibu^*ja Heriyon%@e Focubeyeyu::-0.28,Kex#$awowo Cadonotixa Baxetikini::0.68,Kixozodeti Nibujaliki::0.99 --chaos 10
```