## Visibility of the Code Repository
The course code repository will be owned by the Temporal organization
in GitHub and its visibility must be public (this is a requirement for
using GitPod to provision the exercise environment). 

Note that the course content repository will be private, as explained
in the [README.md for that template](../content-repo/README.md), so
that our LMS remains the portal through which learners use to find, 
register for, and participate in our training.

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

The [README.md for the content repo template](../content-repo/README.md) 
provides more information about course numbers and future plans for 
handling translactions/localizations.


## Typical Layout of Course Code Repositories

```
  +-- demos/	              # Contains subdirectories for any instructor-led demonstrations that involve
  |   |                       # code that is deployed to the exercise environment.
  |   |
  |   +-- <demo-slug>/        # Directory containing code used in a specific demo (<demo-slug> is a short descriptive name, 
  |       |                   # such as 'retry-policy' or 'activity-timeout').  
  |       |
  |       +-- README.md       # Markdown file that briefly describes this demo and the files it uses (detailed instructions
  |                           # for performing the demo are instead stored in the course's content repository, using a 
  |                           # Markdown file below the relevant <chapter>/assets/instructor-guide/ subdirectory)
  |
  +-- exercises/              # Contains subdirectories with instructions and code for all hands-on exercises
  |   |
  |   +-- <exercise-slug>/    # Directory for a specific exercise (<exercise-slug> is a short descriptive name, such as 'hello-workflow')
  |       |
  |       +-- practice/       # Code that learner will modify and use during this exercise
  |       |
  |       +-- solution/       # Completed version of this exercise, which the learner may use for hints or comparisons
  |       |                   # and which the instructor will explain when doing a recap of the exercise
  |       |
  |       +-- README.md       # Markdown file containing step-by-step instructions for performing this exercise
  |
  +-- samples/                # Contains subdirectories with code samples provided for reference, such as code shown 
  |   |                       # in a video. Less commonly, a course may provide sample code related to something that
  |   |                       # is tangental to the course, thereby providing an opportunity for advanced students to 
  |   |                       # experiment and instructors to do ad hoc demos during a live workshop.
  |   |
  |   +-- <sample-slug>/      # Directory for a sample (<sample-slug> is a short descriptive name, such as 'dsl-workflow')
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
  |
  +-- style.css               # Customizes style of Markdown content showed in GitPod's preview mode, for better readability
```
