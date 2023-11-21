# Install instructions
 
## Table of contents
 
1. [Clone Git Repo](#clone)
2. [Build source code](#build-source)
 
<br><br>
 
### <a name="clone"></a> Clone Git repo
---
 
Open project at [GitHub Repo](https://github.com/greenscreens-io/facelift) and follow instructions on how to clone repo or use the following from the command line.
 
```
https://github.com/greenscreens-io/facelift.git
```
 
<br>
 
### <a name="build-source"></a> **Build source**
---
 
Facelift WebComponents are written in ES2022 JavaScript as modules. Generally, building the source into a single JavaScript file is not required.  
 
As source requires modern browsers, and as modern browsers use HTTPS/2 which, when a web server is configured properly, pushes resources through a single channel, requirements to build modules is not so important anymore.

Another advantage of not "building" JavaScript Modules is [tree-shaking](https://en.wikipedia.org/wiki/Tree_shaking) support which allows loading only required modules on demand.

However, we preapred Rollup configuration if there is a requirement to build a single library. Check inside [rollup.config.mjs](../rollup.config.mjs) for instructions.
 
<br>

&copy; Green Screens Ltd. 2016 - 2024
