import React from 'react';
import Select from 'antd/lib/select';
import DatePicker from 'antd/lib/date-picker';
import moment from 'moment';
import './App.css';
import Article from './component/Article';
import languagesMap from './languages.json';
import { post } from './service/data';

const { MonthPicker, WeekPicker } = DatePicker;
const intervalMap = {
  daily: {
    component: DatePicker,
    earliest: '2019-08-08',
  },
  weekly: {
    component: WeekPicker,
    earliest: '2019-08-11',
  },
  monthly: {
    component: MonthPicker,
    earliest: '2019-08-01',
  }
};

const mock = [
  {
    "link": "https://github.com/ricklamers/gridstudio",
    "star": 3984,
    "fork": 647,
    "language": "JavaScript",
    "intro": "Grid studio is a web-based spreadsheet application with full integration of the Python programming language."
  },
  {
    "link": "https://github.com/apollographql/fullstack-tutorial",
    "star": 415,
    "fork": 197,
    "language": "JavaScript",
    "intro": "? The Apollo platform tutorial app"
  },
  {
    "link": "https://github.com/amejiarosario/dsa.js-data-structures-algorithms-javascript",
    "star": 3846,
    "fork": 285,
    "language": "JavaScript",
    "intro": "Data Structures and Algorithms explained and implemented in JavaScript"
  },
  {
    "link": "https://github.com/google/blockly",
    "star": 6610,
    "fork": 2330,
    "language": "JavaScript",
    "intro": "The web-based visual programming editor."
  },
  {
    "link": "https://github.com/adam-p/markdown-here",
    "star": 39812,
    "fork": 6876,
    "language": "JavaScript",
    "intro": "Google Chrome, Firefox, and Thunderbird extension that lets you write email in Markdown and render it before sending."
  },
  {
    "link": "https://github.com/lllyasviel/style2paints",
    "star": 10450,
    "fork": 1269,
    "language": "JavaScript",
    "intro": "sketch + style = paints ?"
  },
  {
    "link": "https://github.com/babel/babel",
    "star": 34138,
    "fork": 3698,
    "language": "JavaScript",
    "intro": "? Babel is a compiler for writing next generation JavaScript."
  },
  {
    "link": "https://github.com/select2/select2",
    "star": 23856,
    "fork": 5672,
    "language": "JavaScript",
    "intro": "Select2 is a jQuery based replacement for select boxes. It supports searching, remote data sets, and infinite scrolling of results."
  },
  {
    "link": "https://github.com/gatsbyjs/gatsby",
    "star": 36982,
    "fork": 5672,
    "language": "JavaScript",
    "intro": "Build blazing fast, modern apps and websites with React"
  },
  {
    "link": "https://github.com/photonstorm/phaser",
    "star": 25364,
    "fork": 5981,
    "language": "JavaScript",
    "intro": "Phaser is a fun, free and fast 2D game framework for making HTML5 games for desktop and mobile web browsers, supporting Canvas and WebGL rendering."
  },
  {
    "link": "https://github.com/wekan/wekan",
    "star": 14716,
    "fork": 2169,
    "language": "JavaScript",
    "intro": "The open-source kanban (built with Meteor). Keep variable/table/field names camelCase. For translations, only add PR changes to wekan/i18n/en.i18n.json , other translations are done at https://transifex.com/wekan/wekan only."
  },
  {
    "link": "https://github.com/d3/d3",
    "star": 86532,
    "fork": 21132,
    "language": "JavaScript",
    "intro": "Bring data to life with SVG, Canvas and HTML. ???"
  },
  {
    "link": "https://github.com/uber/deck.gl",
    "star": 6356,
    "fork": 1031,
    "language": "JavaScript",
    "intro": "WebGL2 powered geospatial visualization layers"
  },
  {
    "link": "https://github.com/twbs/bootstrap",
    "star": 135104,
    "fork": 66498,
    "language": "JavaScript",
    "intro": "The most popular HTML, CSS, and JavaScript framework for developing responsive, mobile first projects on the web."
  },
  {
    "link": "https://github.com/josdejong/jsoneditor",
    "star": 6082,
    "fork": 1339,
    "language": "JavaScript",
    "intro": "A web-based tool to view, edit, format, and validate JSON"
  },
  {
    "link": "https://github.com/invertase/react-native-firebase",
    "star": 5918,
    "fork": 930,
    "language": "JavaScript",
    "intro": "? A well tested feature rich modular Firebase implementation for React Native. Supports both iOS & Android platforms for over 20 Firebase services."
  },
  {
    "link": "https://github.com/nolimits4web/swiper",
    "star": 20567,
    "fork": 7533,
    "language": "JavaScript",
    "intro": "Most modern mobile touch slider with hardware accelerated transitions"
  },
  {
    "link": "https://github.com/facebook/create-react-app",
    "star": 70448,
    "fork": 16172,
    "language": "JavaScript",
    "intro": "Set up a modern web app by running one command."
  },
  {
    "link": "https://github.com/vuejs/vue-router",
    "star": 14375,
    "fork": 3852,
    "language": "JavaScript",
    "intro": "? The official router for Vue.js."
  },
  {
    "link": "https://github.com/openlayers/openlayers",
    "star": 5341,
    "fork": 1997,
    "language": "JavaScript",
    "intro": "OpenLayers"
  },
  {
    "link": "https://github.com/modood/Administrative-divisions-of-China",
    "star": 5037,
    "fork": 2705,
    "language": "JavaScript",
    "intro": "中华人民共和国行政区划：省级（省份直辖市自治区）、 地级（城市）、 县级（区县）、 乡级（乡镇街道）、 村级（村委会居委会） ，中国省市区镇村二级三级四级五级联动地址数据 Node.js 爬虫。"
  },
  {
    "link": "https://github.com/NervJS/taro",
    "star": 20844,
    "fork": 2314,
    "language": "JavaScript",
    "intro": "多端统一开发框架，支持用 React 的开发方式编写一次代码，生成能运行在微信/百度/支付宝/字节跳动/ QQ 小程序、快应用、H5、React Native 等的应用。 https://taro.jd.com/"
  },
  {
    "link": "https://github.com/mrdoob/three.js",
    "star": 53717,
    "fork": 20329,
    "language": "JavaScript",
    "intro": "JavaScript 3D library."
  },
  {
    "link": "https://github.com/aws/aws-sdk-js",
    "star": 5327,
    "fork": 1000,
    "language": "JavaScript",
    "intro": "AWS SDK for JavaScript in the browser and Node.js"
  },
  {
    "link": "https://github.com/GeekyAnts/NativeBase",
    "star": 12461,
    "fork": 1492,
    "language": "JavaScript",
    "intro": "Essential cross-platform UI components for React Native"
  }
];
const languages = ["", "c", "c++", "css", "html", "python", "typescript", "unknown", "1c-enterprise", "abap", "abnf", "actionscript", "ada", "adobe-font-metrics", "agda", "ags-script", "alloy", "alpine-abuild", "altium-designer", "ampl", "angelscript", "ant-build-system", "antlr", "apacheconf", "apex", "api-blueprint", "apl", "apollo-guidance-computer", "applescript", "arc", "asciidoc", "asn.1", "asp", "aspectj", "assembly", "asymptote", "ats", "augeas", "autohotkey", "autoit", "awk", "ballerina", "batchfile", "befunge", "bison", "bitbake", "blade", "blitzbasic", "blitzmax", "bluespec", "boo", "brainfuck", "brightscript", "zeek", "c", "c%23", "c++", "c-objdump", "c2hs-haskell", "cabal-config", "cap'n-proto", "cartocss", "ceylon", "chapel", "charity", "chuck", "cirru", "clarion", "clean", "click", "clips", "clojure", "closure-templates", "cloud-firestore-security-rules", "cmake", "cobol", "coffeescript", "coldfusion", "coldfusion-cfc", "collada", "common-lisp", "common-workflow-language", "component-pascal", "conll-u", "cool", "coq", "cpp-objdump", "creole", "crystal", "cson", "csound", "csound-document", "csound-score", "css", "csv", "cuda", "cweb", "cycript", "cython", "d", "d-objdump", "darcs-patch", "dart", "dataweave", "desktop", "dhall", "diff", "digital-command-language", "dm", "dns-zone", "dockerfile", "dogescript", "dtrace", "dylan", "e", "eagle", "easybuild", "ebnf", "ec", "ecere-projects", "ecl", "eclipse", "edje-data-collection", "edn", "eiffel", "ejs", "elixir", "elm", "emacs-lisp", "emberscript", "eml", "eq", "erlang", "f%23", "f*", "factor", "fancy", "fantom", "figlet-font", "filebench-wml", "filterscript", "fish", "flux", "formatted", "forth", "fortran", "freemarker", "frege", "g-code", "game-maker-language", "gams", "gap", "gcc-machine-description", "gdb", "gdscript", "genie", "genshi", "gentoo-ebuild", "gentoo-eclass", "gerber-image", "gettext-catalog", "gherkin", "git-attributes", "git-config", "glsl", "glyph", "glyph-bitmap-distribution-format", "gn", "gnuplot", "go", "golo", "gosu", "grace", "gradle", "grammatical-framework", "graph-modeling-language", "graphql", "graphviz-(dot)", "groovy", "groovy-server-pages", "hack", "haml", "handlebars", "haproxy", "harbour", "haskell", "haxe", "hcl", "hiveql", "hlsl", "holyc", "html", "html+django", "html+ecr", "html+eex", "html+erb", "html+php", "html+razor", "http", "hxml", "hy", "hyphy", "idl", "idris", "igor-pro", "inform-7", "ini", "inno-setup", "io", "ioke", "irc-log", "isabelle", "isabelle-root", "j", "jasmin", "java", "java-properties", "java-server-pages", "javascript", "javascript+erb", "jflex", "jison", "jison-lex", "jolie", "json", "json-with-comments", "json5", "jsoniq", "jsonld", "jsonnet", "jsx", "julia", "jupyter-notebook", "kicad-layout", "kicad-legacy-layout", "kicad-schematic", "kit", "kotlin", "krl", "labview", "lasso", "latte", "lean", "less", "lex", "lfe", "lilypond", "limbo", "linker-script", "linux-kernel-module", "liquid", "literate-agda", "literate-coffeescript", "literate-haskell", "livescript", "llvm", "logos", "logtalk", "lolcode", "lookml", "loomscript", "lsl", "lua", "m", "m4", "m4sugar", "makefile", "mako", "markdown", "marko", "mask", "mathematica", "matlab", "maven-pom", "max", "maxscript", "mcfunction", "mediawiki", "mercury", "meson", "metal", "minid", "mirah", "modelica", "modula-2", "modula-3", "module-management-system", "monkey", "moocode", "moonscript", "motorola-68k-assembly", "mql4", "mql5", "mtml", "muf", "mupad", "myghty", "nanorc", "ncl", "nearley", "nemerle", "nesc", "netlinx", "netlinx+erb", "netlogo", "newlisp", "nextflow", "nginx", "nim", "ninja", "nit", "nix", "nl", "nsis", "nu", "numpy", "objdump", "objective-c", "objective-c++", "objective-j", "objectscript", "ocaml", "omgrofl", "ooc", "opa", "opal", "opencl", "openedge-abl", "openrc-runscript", "openscad", "opentype-feature-file", "org", "ox", "oxygene", "oz", "p4", "pan", "papyrus", "parrot", "parrot-assembly", "parrot-internal-representation", "pascal", "pawn", "pep8", "perl", "perl-6", "php", "pic", "pickle", "picolisp", "piglatin", "pike", "plpgsql", "plsql", "pod", "pod-6", "pogoscript", "pony", "postcss", "postscript", "pov-ray-sdl", "powerbuilder", "powershell", "processing", "prolog", "propeller-spin", "protocol-buffer", "public-key", "pug", "puppet", "pure-data", "purebasic", "purescript", "python", "python-console", "python-traceback", "q", "qmake", "qml", "quake", "r", "racket", "ragel", "raml", "rascal", "raw-token-data", "rdoc", "realbasic", "reason", "rebol", "red", "redcode", "regular-expression", "ren'py", "renderscript", "restructuredtext", "rexx", "rhtml", "rich-text-format", "ring", "rmarkdown", "robotframework", "roff", "roff-manpage", "rouge", "rpc", "rpm-spec", "ruby", "runoff", "rust", "sage", "saltstack", "sas", "sass", "scala", "scaml", "scheme", "scilab", "scss", "sed", "self", "shaderlab", "shell", "shellsession", "shen", "slash", "slice", "slim", "smali", "smalltalk", "smarty", "smt", "solidity", "sourcepawn", "sparql", "spline-font-database", "sqf", "sql", "sqlpl", "squirrel", "srecode-template", "ssh-config", "stan", "standard-ml", "stata", "ston", "stylus", "subrip-text", "sugarss", "supercollider", "svg", "swift", "systemverilog", "tcl", "tcsh", "tea", "terra", "tex", "text", "textile", "thrift", "ti-program", "tla", "toml", "tsql", "tsx", "turing", "turtle", "twig", "txl", "type-language", "typescript", "unified-parallel-c", "unity3d-asset", "unix-assembly", "uno", "unrealscript", "urweb", "vala", "vcl", "verilog", "vhdl", "vim-script", "visual-basic", "volt", "vue", "wavefront-material", "wavefront-object", "wdl", "web-ontology-language", "webassembly", "webidl", "webvtt", "windows-registry-entries", "wisp", "wollok", "world-of-warcraft-addon-data", "x-bitmap", "x-font-directory-index", "x-pixmap", "x10", "xbase", "xc", "xcompose", "xml", "xojo", "xpages", "xproc", "xquery", "xs", "xslt", "xtend", "yacc", "yaml", "yang", "yara", "yasnippet", "zap", "zeek", "zenscript", "zephir", "zig", "zil", "zimpl"];

class App extends React.Component {
  state = {
    interval: 'daily',
    language: '',
    date: moment().subtract(1, "days"),
    articles: [],
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    const { language, interval, date } = this.state;
    const data = await post({language, interval, date: date.format('YYYY-MM-DD')});
    console.log('data: ', data);
  }

  disabledDate = date => {
    const { interval } = this.state;
    const earliest = moment(intervalMap[interval].earliest);
    return (date.valueOf() <= earliest.valueOf()) || (date.valueOf() >= moment().valueOf());
  };

  handleDateChange = date => {
    console.log('date: ', date);
    
  }

  handleLanguageChange = language => {
    this.setState({ language }, _ => {
      this.fetchData();
    });
  }

  handleIntervalChange = interval => {
    this.setState({ interval }, _ => {
      this.fetchData();
    });
  }

  render() {
    const {interval} = this.state;
    const Picker = intervalMap[interval].component;
    return (
      <>
        <div className="explore-pjax-container container-lg p-responsive pt-6">
          <div className="Box">
            <div className="Box-header d-md-flex flex-items-center flex-justify-between">
              <nav className="subnav mb-0" aria-label="Trending" data-pjax>
                <span className="js-selected-navigation-item selected subnav-item" aria-current="page"
                  data-selected-links="trending_repositories /trending">Repositories</span>
              </nav>
              <div>
                <Picker
                  disabledDate={this.disabledDate}
                  onChange={this.handleDateChange}
                  />
              </div>
              <div
                className="d-sm-flex flex-items-center flex-md-justify-end mt-3 mt-md-0 table-list-header-toggle ml-n2 ml-md-0">
                <div className="mb-3 mb-sm-0">
                  <span style={{ display: 'inline-block', margin: '0 10px' }}>Language:</span>
                  <Select
                    showSearch
                    placeholder="Language"
                    optionFilterProp="children"
                    defaultValue=""
                    dropdownMatchSelectWidth={false}
                    dropdownStyle={{ width: 200 }}
                    onChange={this.handleLanguageChange}
                    style={{ width: 150 }}>
                    {languages
                      .filter(language => languagesMap[language])
                      .map(language => <Select.Option key={language} value={language}>{languagesMap[language]}</Select.Option>)}
                  </Select>
                </div>

                <div>
                  <span style={{ display: 'inline-block', margin: '0 10px' }}>Date range:</span>
                  <Select
                    showSearch
                    optionFilterProp="children"
                    defaultValue="daily"
                    dropdownMatchSelectWidth={false}
                    onChange={this.handleIntervalChange}
                    style={{ width: 120 }}>
                    <Select.Option value="daily">Today</Select.Option>
                    <Select.Option value="weekly">This week</Select.Option>
                    <Select.Option value="monthly">This month</Select.Option>
                  </Select>
                </div>
              </div>
            </div>
            <div>
              {mock.map(article => <Article key={article.link} {...article} />)}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;
