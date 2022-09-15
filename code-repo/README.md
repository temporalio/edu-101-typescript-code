## Naming Convention for Course Code Repositories

Because the course content is distributed independently of the code, we use 
two repositories for each course. The course code repository will contain 
files (particularly source code) used in hands-on exercises, instructor-led
demonstrations, and samples provided for reference purposes. The content
of this repository is deployed to the exercise environment (currently
GitPod), so the repository will also contain files used to configure
that environment. 

Since we will have multiple courses, each of which will likely have multiple 
versions that each cover a specific SDK, following a naming convention will
make it easier to locate (or identify) the repository for a given course.
I propose the following convention: `edu-<COURSENUM>-<LANGUAGE>-code`,
where `<COURSENUM>` is the three-digit course number that designates the
sequence of the course within the learning path and `<LANGUAGE>` denotes
the programming language used in the course. The `edu` prefix allows us
to find all course repositories easily, while the `code` suffix ensures
that the content and code repositories for a given course always appear
next to one another in a sorted list.

The following table provides examples of this pattern:

| Repository Name Examples   | Description of contents
|----------------------------|-----------------------------------------------------------------------
| `edu-101-go-code`          | Temporal 101 for Go course code
| `edu-101-java-code`        | Temporal 101 for Java course code
| `edu-102-typescript-code`  | Temporal 102 for Typescript course code
| `edu-201-python-code`      | Temporal 201 for Python course code

NOTE: a possible shortcoming of this convention is that it does not distinguish the audience 
(e.g., developers vs. administrators) or human language (e.g., Spanish or Japanese). However, 
it's likely sufficient for the foreseeable future and should be easy to extend when required.


## Typical Layout of Course Code Repositories

```
  +-- demos/	              # Contains subdirectories with instructions and code for all instructor-led demonstrations
  |   |
  |   +-- <shortname>/        # Directory for a demo (with a name such as gitpod-orientation)
  |   |   |                   # Code used in this demo, if there is any, will also be stored below this directory
  |   |   +-- README.md       # Markdown file containing step-by-step instructions for performing this demo
  |   |
  |   +-- <shortname>/        # Directory for another demo (with a name such as using-web-ui); content follows pattern above
  |       |
  |       +-- README.md       # Markdown file containing step-by-step instructions for performing this demo
  |
  +-- exercises/              # Contains subdirectories with instructions and code for all hands-on exercises
  |   |
  |   +-- <shortname>/        # Directory for one exercise (named with a short name, such as activity-failure); will also contain demo code, if applicable
  |       |
  |       +-- practice/       # Code that learner will modify and use during this exercise
  |       |
  |       +-- solution/       # Completed version of this exercise, which the learner may use for hints or comparisons
  |       |
  |       +-- README.md       # Markdown file containing step-by-step instructions for performing this exercise
  |
  +-- samples/                # Contains subdirectories with code samples provided for reference (not part of an exercise or demo)
  |   |
  |   +-- <shortname>/        # Directory for a demo (with a name such as custom-retry-policy)
  |
  +-- temporal-server/        # Directory containing the Docker configuration files used by GitPod
  |
  +-- .gitignore              # List of file names and patterns to ignore for revision control (content will vary by programming language)
  |
  +-- .gitpod.yml             # GitPod configuration file
  |
  +-- LICENSE                 # MIT license that attributes work to Temporal
  |
  +-- README.md               # Top-level index page for the course, containing a link to the code repo and bulleted list of links to each chapter
```




