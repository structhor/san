# san
SAN is for Structural Analysis

## --@jgwill san decomposer tool

* --@stcgoal Creates an analysis form from a text.
* --@stcissue Perspective to analyze textual information is not pictural.

```nodejs
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

var sampleResult__markdownTable = `
|       |       |       |       |       |
|  ---  |  ---  |  ---  |  ---  |  ---  |
|       |       |   Reporting to Pipeline Leadership, the Houdini Pipeline Developer will be developing tools and workflows to allow FX artists to efficiently move assets from upstream departments into Houdini, and integrate the resulting simulations into final shots.    |       |       |
|       |       |       |       |       |
|       |       |    The Houdini Pipeline Developer’s perspective is high level and forward looking.    |       |       |
|       |       |       |       |       |
|       |       |   Demonstrated ability to prioritize, partner and implement new and improved technologies, the Houdini Pipeline Developer has advanced skills with Houdini, Python and C++ required for research, development and mentoring others.    |       |       |
|       |       |       |       |       |
|       |       |   The Houdini Pipeline Developer will be required to work with FX artists to design and implement tools to effectively move assets between 3DS Max and Houdini, improve the efficiency of our FX workflow, and ensure accurate output in ways that mesh well with current tools and workflows.    |       |       |
  
`;


```