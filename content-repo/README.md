## Naming Convention for Course Content Repositories

Because the course content is distributed independently of the code, we use 
two repositories for each course. The course content repository will contain 
the lessons, diagrams, narration transcripts, instructor guide material, and 
other files used to teach the course.

Since we will have multiple courses, each of which will likely have multiple 
versions that each cover a specific SDK, following a naming convention will
make it easier to locate (or identify) the repository for a given course.
I propose the following convention: `edu-<COURSENUM>-<LANGUAGE>-content`,
where `<COURSENUM>` is the three-digit course number that designates the
sequence of the course within the learning path and `<LANGUAGE>` denotes
the programming language used in the course. The `edu` prefix allows us
to find all course repositories easily, while the `content` suffix ensures
that the content and code repositories for a given course always appear
next to one another in a sorted list.

The following table provides examples of this pattern:

| Repository Name Examples      | Description of contents
|-------------------------------|-----------------------------------------------------------------------
| `edu-101-go-content`          | Temporal 101 for Go course content
| `edu-101-java-content`        | Temporal 101 for Java course content
| `edu-102-typescript-content`  | Temporal 102 for Typescript course content
| `edu-201-python-content`      | Temporal 201 for Python course content

NOTE: a possible shortcoming of this convention is that it does not distinguish the audience 
(e.g., developers vs. administrators) or human language (e.g., Spanish or Japanese). However, 
it's likely sufficient for the foreseeable future and should be easy to extend when required.


## Typical Layout of Course Content Repositories

```
  +-- 00-about-this-workshop/    # Holds content related to the intro chapter (which covers objectives, introductions, and logistics)
  |   |
  |   +-- README.md              # Markdown file for intro chapter content (if the chapter contains other pages, this will link to them)
  |   |
  |   +-- assets/                # Contains files used to produce content for this chapter (e.g., a Keynote file or PSD version of a JPG file exported to images directory)
  |   |   |
  |   |   +-- instructor-guide/  # Contains instructor guide content this chapter
  |   |   |   |
  |   |   |   +-- README.md      # Markdown file containing instructor guide content for this chapter (if there are other pages, this will link to them)
  |   |   |
  |   |   +-- transcripts/       # Contains narration transcripts for all videos in this chapter
  |   |       |
  |   |       +-- video-01.md    # The narration transcript (in Markdown format) for the first video in this chapter
  |   |
  |   +-- images/                # Contains all images that are specific to the intro chapter
  |
  |
  +-- 01-<chapter-slug>/         # Holds chapter 1 content (<chapter-slug> is a short descriptive name, such as 'what-is-temporal')
  |                              # Structure below this and other chapter directories is identical to that described above
  |
  +-- 02-<chapter-slug>/         # Holds chapter 2 content (<chapter-slug> is a short descriptive name, such as 'developing-a-workflow')
  |
  +-- <##>-conclusion/           # Holds content for conclusion chapter (provides recap, reference material, and next steps); chapter number will vary
  |
  +-- common/                    # Holds files referenced in or used by multiple chapters
  |   |
  |   +-- assets/                # Contains files that are used to produce the course content
  |   |
  |   +-- images/                # Contain images that are referenced in multiple chapters
  |
  +-- .gitignore                 # List of file names and patterns to ignore for revision control
  |
  +-- LICENSE                    # MIT license that attributes work to Temporal
  |
  +-- README.md                  # Top-level index page for the course, containing a link to the code repo and bulleted list of links to each chapter
```




