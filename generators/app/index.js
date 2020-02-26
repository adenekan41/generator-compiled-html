"use strict";
const Generator = require("yeoman-generator");
const chalk = require("chalk");
const yosay = require("yosay");

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(yosay(`Welcome to the ${chalk.red("gcompiled-html")} generator!`));

    const prompts = [
      {
        type: "input",
        name: "name",
        message: "Your project name",
        default: this.appname
      },
      {
        type: "input",
        name: "description",
        message: "Your project description",
        default: "a compiled html project"
      }
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
      this.log(props.name);
    });
  }

  writing() {
    this.fs.copyTpl(
      this.templatePath("_package.json"),
      this.destinationPath("package.json"),
      {
        name: this.props.name,
        description: this.props.description
      }
    );

    this.fs.copyTpl(
      this.templatePath("_bower.json"),
      this.destinationPath("bower.json"),
      {
        name: this.props.name
      }
    );

    //Server file
    this.fs.copy(
      this.templatePath("_gulpfile.js"),
      this.destinationPath("gulpfile.js"),
      {
        name: this.props.name
      }
    );

    /////components
    this.fs.copy(
      this.templatePath("_src/_components/_head.cw"),
      this.destinationPath("src/components/head.cw")
    );

    // Model
    this.fs.copy(
      this.templatePath("_src/_scripts/_main.js"),
      this.destinationPath("src/scripts/main.js")
    );

    this.fs.copy(
      this.templatePath("_src/_scripts/_helpers/_help.js"),
      this.destinationPath("src/scripts/helpers/help.js")
    );

    // View
    this.fs.copyTpl(
      this.templatePath("_src/_index.html"),
      this.destinationPath("src/index.html"),
      {
        name: this.props.name
      }
    );

    // Public/
    this.fs.copy(
      this.templatePath("_src/_styles/_main.scss"),
      this.destinationPath("src/styles/main.scss")
    );
  }

  install() {
    this.installDependencies();
  }
};
