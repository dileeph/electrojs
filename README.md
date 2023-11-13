- npm init  
- npm install --save-dev electron  
  
in package.json modify scripts   
  
    {
        "scripts" : {
            "start" : "electron ." 
        }
    }

    
to run:  

- npm start   

to release:  

- npm install --save-dev @electron-forge/cli  
- npx electron-forge import  

- npm run make 

check 'out' folder for release binaries.  



