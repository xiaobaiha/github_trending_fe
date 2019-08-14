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
    const newDate = this.calculateDate(interval, date);
    const articles = await post({ language, interval, date: newDate.format('YYYY-MM-DD') });
    this.setState({ articles })
  }

  disabledDate = date => {
    const { interval } = this.state;
    const earliest = moment(intervalMap[interval].earliest);
    return (date.valueOf() <= earliest.valueOf()) || (date.valueOf() >= moment().valueOf());
  };

  calculateDate = (interval, dateOld) => {
    const date = moment(dateOld);
    switch (interval) {
      case 'daily':
        return date;
      case 'weekly':
        return date.day() === 0 ? date : date.day(7);
      case 'monthly':
        return moment(date.format('YYYY-MM'));
      default:
        return date;
    }
  }

  handleDateChange = date => {
    this.setState({ date }, _ => {
      this.fetchData();
    });
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
    const { interval, articles, date } = this.state;
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
              <div className="date-picker">
                <Picker
                  disabledDate={this.disabledDate}
                  onChange={this.handleDateChange}
                  defaultValue={date}
                />
              </div>
              <div
                className="select-container d-sm-flex flex-items-center flex-md-justify-end mt-3 mt-md-0 table-list-header-toggle ml-n2 ml-md-0">
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
                    style={{ width: 150 }}>
                    <Select.Option value="daily">Daily</Select.Option>
                    <Select.Option value="weekly">Weekly</Select.Option>
                    <Select.Option value="monthly">Monthly</Select.Option>
                  </Select>
                </div>
              </div>
            </div>
            <div>
              {articles.map(article => <Article key={article.link} {...article} />)}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;
