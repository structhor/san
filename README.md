# gisan
(gi) SAN is for Structural Analysis

## --@jgwill SAN is a Structural Analysis decomposer tool.

* --@stcgoal Creates an analysis form from a text.
* --@stcissue Perspective to analyze textual information is not pictural.

## Install 
```sh
npm install --g gisan 
```
## Usage
```sh
gisan "my text"
gisan "my text" "my other text"
```


## Sample markdown Table 

|   No    |  QT     |   Questions    |  Material     |  Notes     |
|  ---  |  ---  |  ---  |  ---  |  ---  |
|   1    |       |       |       |       |
|   2    |       |       | Reporting to Pipeline Leadership, the Houdini Pipeline Developer will be developing tools and workflows to allow FX artists to efficiently move assets from upstream departments into Houdini, and integrate the resulting simulations into final shots.      |       |
|   3    |       |       |       |       |
|   4    |       |        | The Houdini Pipeline Developer’s perspective is high level and forward looking.      |       |
|   5    |       |       |       |       |
|   6    |       |       | Demonstrated ability to prioritize, partner and implement new and improved technologies, the Houdini Pipeline Developer has advanced skills with Houdini, Python and C++ required for research, development and mentoring others.      |       |
|   7    |       |       |       |       |
|   8    |       |       | The Houdini Pipeline Developer will be required to work with FX artists to design and implement tools to effectively move assets between 3DS Max and Houdini, improve the efficiency of our FX workflow, and ensure accurate output in ways that mesh well with current tools and workflows.      |       |
  


## Prototype
* see: [prototype.js](prototype.js)
```sh
gisan "Reporting to Pipeline Leadership, the Houdini Pipeline Developer will be developing tools and workflows to allow FX artists t
o efficiently move assets from upstream departments into Houdini, and integrate the resulting simulations into final shots "

## OUTPUT

# Reporting to Pipeline Leadership

|No     |QT     |Questions      |Statement      |       Notes   |
| ---   | ---   | ---           |       ---     |       ---     |
|1      |       |               |Reporting to Pipeline Leadership       |       |
|1.1    |       |               |       |       |
|2      |       |               | the Houdini Pipeline Developer will be developing tools and workflows to allow FX artists to efficiently move assets from upstream departments into Houdini      |       |
|2.1    |       |               |       |       |
|3      |       |               | and integrate the resulting simulations into final shots      |       |
|3.1    |       |               |       |       |

```

## Reference
* Interested in knowing more about structural thinking will have a look at [Robert Fritz's Video + MMOT](http://guillaumeisabelle.com/r/structhor/san/README/ref)
* A [SimpleNote publishing describe complementary info](http://simp.ly/p/pxBCwZ)

## Pseudo var & code
* see [pseudo.js](pseudo.js)

```nodejs
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
var arr = inText.Split(".");
var result = `|       |       |       |       |       |
|  ---  |  ---  |  ---  |  ---  |  ---  |
`;
var c = 1;
//foreach arr oline
var l = `|  ${c++}     |       | ${oline}      |       |       |`;
result += l + "\n";
```


## Analyzing
### --@STCGoal Then, what is the goal of the analysis grid ?
* Know what it is about?
* A tool for learning, questionning using a well organize and simple structure


### State: Ready for working with the sampleResult__markdownTable =

|   No    |  QT     |   Questions    |  Statement     |  Notes     |
|  ---  |  ---  |  ---  |  ---  |  ---  |
|   1    |       |       |       |       |
|   2    |       |       | Reporting to Pipeline Leadership, the Houdini Pipeline Developer will be developing tools and workflows to allow FX artists to efficiently move assets from upstream departments into Houdini, and integrate the resulting simulations into final shots.      |       |
|   3    |  Clarification     | What are the upstream departments?       |       |       |
|   3.1    |       |       |       |       |
|   4    |       |        | The Houdini Pipeline Developer’s perspective is high level and forward looking.      |       |
|   4.1    |   Clarification    |  What do they mean by high level?     |       |       |
|   4.1    |       |       |       |       |
|   4.2    |   Clarification    | What do they mean by forward looking?      |       |       |
|   4.2    |       |       |       |       |
|   5    |       |       | Demonstrated ability to prioritize, partner and implement new and improved technologies, the Houdini Pipeline Developer has advanced skills with Houdini, Python and C++ required for research, development and mentoring others.      |       |
|   7    |  Implication     |  What is important is the ability to recognize what is dominant in the action todo?     |       |       |
|   7    |       |       |       |       |
|   7.1    |       |       |       |       |
|   8    |       |       | The Houdini Pipeline Developer will be required to work with FX artists to design and implement tools to effectively move assets between 3DS Max and Houdini, improve the efficiency of our FX workflow, and ensure accurate output in ways that mesh well with current tools and workflows.      |       |
|   8.1    |   Info    |    What does moving assets imply?   |       |       |