#!/usr/bin/env node
//--@STCGoal pseudo giving a draft of the markdown table
console.log(`
--------------------------------------------------
SAN - Structural Analysis Grid creator
by: Guillaume Descoteaux-Isabelle,2019
based on : Robert & Rosalind Fritz's work.
-------------------------------------------------
`);
var debug = false;

for (let j = 0; j < process.argv.length; j++) {
    if (j>0)
        {
            var iText = process.argv[j];
           if (debug) console.log(j + ' -> ' + iText);
            var res = makeSanV1(iText);
            console.log(res);
        }
}


//Sample
var inText = `Reporting to Pipeline Leadership, the Houdini Pipeline Developer will be developing tools and workflows to allow FX artists to efficiently move assets from upstream departments into Houdini, and integrate the resulting simulations into final shots. The Houdini Pipeline Developer’s perspective is high level and forward looking. Demonstrated ability to prioritize, partner and implement new and improved technologies, the Houdini Pipeline Developer has advanced skills with Houdini, Python and C++ required for research, development and mentoring others. The Houdini Pipeline Developer will be required to work with FX artists to design and implement tools to effectively move assets between 3DS Max and Houdini, improve the efficiency of our FX workflow, and ensure accurate output in ways that mesh well with current tools and workflows.`;

var markdownTable = `
|       |       |       |       |       |
|  ---  |  ---  |  ---  |  ---  |  ---  |
|       |       |       |       |       |
|       |       |       |       |       |
|       |       |       |       |       |
|       |       |       |       |       |
|       |       |       |       |       |
|       |       |       |       |       |
|       |       |       |       |       |

`;
function makeSanV1(inText)
{


    //Each line is decomposed
    var arr = [];
    if (inText.indexOf(".")> -1 )//we have dots
        arr =inText.split(".");
        else if (inText.indexOf(",")> -1 )//we dont have dots but have coma
            arr =inText.split(",");
            else 
            arr =inText.split(" "); //end of line, split on Space

    var tableHeader = "# ";

    var modelTitleLine = `|No\t|QT\t|Questions\t|Statement\t|\tNotes\t|`;
    var modelEmptyLine = `|\t|\t|\t|\t|\t|`;
    var modelSeparLine = `| ---\t| ---\t| ---\t\t|\t---\t|\t---\t|`;

    //making result header table
    var result = modelTitleLine + "\n" + modelSeparLine;

    var c = 1;
    //foreach arr oline
    arr.forEach(oline => {
        
        var l = `|${c}\t|\t|\t\t|${oline}\t|\t|`;
        var l2 = `|${c}.1\t|\t|\t\t|\t|\t|`;
        if (c==1) {
            tableHeader += oline; //Using the first sentence as title of the grid.
            var r  = "\n" + tableHeader +  "\n\n" + result;
            result = r + "\n";
        } //@result Out header for the part is created.

        if (oline.length > 3)
            result += l.trim() + "\n" + l2.trim() + "\n";

        c++;
    });

    return result;
}


if (debug )
{

    var res = makeSanV1(inText);
    
    console.log(res);
}