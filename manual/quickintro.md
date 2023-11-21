
# Green Screens Facelift
 
## Quick introduction
 
**WebComponent** - a W3C standard web technology where a custom HTML tag is registered to a JavaScript code which does the magic for that specific tag.
 
**GS Facelift WebComponent** - a Green Screens Ltd. implementation of custom WebComponents used to build interactive UI interfaces for Green Screens 5250 Web Terminal.

**DDS XML Partials** - Facelift backend engine convert DSPF files into series of XML definitions which mirrors Display DDS source used to build DSPF. Each XML document represents a single DDS record format. Where simgle or combination of multipel record formats (partials) makes a UI interface definition.

**DDS Data Source** - Preprocessing WebComponent responsible for ETL transformation. 

**ETL** - Extract, Transform and Load - a concept from data warehousing to extract and transform the data into requierd usable form.

## Facelift Engine

Facelift Engine is a standalone rendering engine which internally uses ETL concept to 
convert 5250 terminal screen raw data into usable JSON structure for Web UI.

Also, based on provided DDS XML Partials, engine might generate HTML dynamic templates to represent modern UI interface for 5250 terminal screens.


## Basic workflow



 <br>

&copy; Green Screens Ltd. 2016 - 2024
