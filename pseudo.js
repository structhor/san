//--@STCGoal pseudo giving a draft of the markdown table


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

//Each line is decomposed
var arr = [];
if (inText.indexOf(".")> -1 )//we have dots
    arr =inText.split(".");
    else if (inText.indexOf(",")> -1 )//we dont have dots but have coma
        arr =inText.split(",");
        else 
        arr =inText.split(" "); //end of line, split on Space

var modelTitleLine = "|   No    |  QT     |   Questions    |  Material     |  Notes     |";
var modelEmptyLine = "|       |       |       |       |       |";
var modelSeparLine = "";

//making result header table
var result = `${modelTitleLine}
${modelSeparLine}
`;

var c = 1;
//foreach arr oline
arr.forEach(oline => {
    
    var l = `|  ${c}     |       | ${oline}      |       |       |`;
    var l2 = `|  ${c}.1     |       |       |       |       |`;
    if (oline.length > 3)
        result += l + "\n" + l2 + "\n";
    c++;
});


console.log(result);