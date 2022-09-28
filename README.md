# Body Doodles

Body Doodles is a social media platform for Tattoo Artists and ink lovers. Users are able to share their tattoo's, designs they have made or like as well as allowing Artists to showcase their work.

MockUp Here

## The Strategy Plane

### Site Goals

Body Doodles is aimed at all tattoo enthusiasts and tattoo artists. The site aims to connect users with tattooists, to allow them to showcase their work, artist information as well as sharing tattoos for visual pleasure.
<hr>

### Agile Planning

This project was developed using agile methodologies by delivering small features in incremental sprints. There were 3 sprints in total, spaced out evenly over three weeks.

All stories were assigned to epics, prioritized under the labels, Must have, should have, could have and assigned to sprints. "Must have" stories were completed first, "should haves" and then finally "could haves". It was done this way to ensure that all core requirements were completed first to give the project a complete feel, with the nice to have features being added should there be capacity.

The Kanban board was created using github projects and can be located [here](https://github.com/users/Gareth-McGirr/projects/1/views/1) and can be viewed to see more information on the project cards. All stories except the documentation tasks have a full set of acceptance criteria in order to define the functionality that marks that story as complete.
<hr>

## Epics

**Set Up**

This Epic covers all the initial setup of the React application and dependencies in order to begin coding features.

**Posts**

This epic covers the front end creation of the application in regards to posts. This is to allow users to interact with the backend API via the user interface in order to create, read, update and delete their own posts.

**Comments**

This epic covers the front end creation of the application in regards to comments on posts. This is to allow users to interact with the backend API in order add comments on posts.

**Profiles**

This epic covers the front end creation of the application in regards to user profiles. This is to allow users to interact with the backend API via the user interface to manage their own profiles.

**Artists**

This epic covers the front end creation of the application in regards to artists. This is to allow users to interact with the backend API and register/unregister themselves as artists and display their artist information.

**Reviews**

This epic covers the front end creation of the application in regards to artist reviews. This is to allow users to interact with the backend API via the user interface allow users to leave reviews on specific artists.
<hr>
<br>

## User Stories

By Epic:

**Posts**

* As a logged in user I can create posts so that I can share my images
* As a user I can keep scrolling through the images on the site, that are loaded for me automatically so that I don't have to click on "next page"
* As a post owner I can edit my post title and description so that I can make corrections or update my post after it was created
* As a logged in user I can view content filtered by users I follow so that I can keep up to date with what they are posting about
* As a logged in user I can view the posts I liked so that I can find the posts I enjoy the most
* As a user I can view all the most recent posts, ordered by most recently created first so that I am up to date with the newest content
* As a logged in user I can like a post so that I can show my support for the posts that interest me
* As a user, I can search for posts with keywords, so that I can find the posts and user profiles I am most interested in.
* As a user I can view the details of a single post so that I can learn more about it
* As a user I can view the post page so that I can read the comments about the post

**Comments**

* As a logged in user I can add comments to a post so that I can share my thoughts about the post
* As a user I can see how long ago a comment was made so that I know how old a comment is
* As a user I can read comments on posts so that I can read what other users think about the posts
* As an owner of a comment I can delete my comment so that I can control removal of my comment from the application
* As an owner of a comment I can edit my comment so that I can fix or update my existing comment

**Profiles**

* As a user I can view all the posts by a specific user so that I can catch up on their latest posts, or decide I want to follow them
* As a user I can view other users profiles so that I can see their posts and learn more about them
* As a user I can create a new account so that I can access all the features for signed up users
* As a user I can view user's avatars so that I can easily identify users of the application
* As a user I can tell if I am logged in or not so that I can log in if I need to
* As a user I can see a list of the most followed profiles so that I can see which profiles are popular
* As a user I can view statistics about a specific user: bio, number of posts, follows and users followed so that I can learn more about them
* As a logged in user I can follow and unfollow other users so that I can see and remove posts by specific users in my posts feed
* As a logged in user I can edit my profile so that I can change my profile picture and bio
* As a logged in user I can update my username and password so that I can change my display name and keep my profile secure
<hr>
<br>

## The Structure Plane

## Features:

**Navigation Menu**

A fully responsive navigation menu has been implemented across the website.

This will allow the users to navigate to different pages on the website with ease from any device. Nav items are different depending on the users logged in state to prevent them accessing areas of the application intended for signed in users.

Logged in users:

When a user is logged in the following navigation items are shown:

* Add Post
* Home
* Artists
* Feed
* Liked
* Sign Out
* Users Icon and Username

Logged out users:

* Home
* Sign In
* Sign Up

The site logo is displayed on the left side of the navigation at all times.

The navigation icons change to a gold colour when the page is active. This is to indicate to users which page they are currently on.

**Home**

The home page displays user posts in order of newest posts first. These posts are visible to all users regardless of logged in status. This will allow non registered users to get a feel for the content on the site to know whether they are interested in signing up.

Restricted access has been implemented on the posts for users who are not signed in, they will not be able to create a post, like or comment on posts.

Logged in users have full access to post, comment or like. This will help ensure that unregistered users do not spam the website while also ensuring genuine users register to the site.

**Posts**

Registered users will be able to create, edit, update and delete posts.

Only the user who created the post will be able to edit or delete that post. This will ensure that users have full control of their own posts and unauthorized users cannot tamper with them.

A Post button has been implemented in the nav bar in order for logged in users to create a post when they want to share something.

Users can also click the Feed navigation item and this will display only posts from users the person has followed.

Users can click the liked navigation item and display all of the posts they have liked.

**Comments**

Below each post, there will be a comment box available to logged in users. This will allow users to add comments under posts.

A comment count will also be shown under the post, to allow users to see how many people have commented on each post.

A comment or updated time will be displayed in either minutes ago or days ago 

The username and Avatar of the user that created the comment will displayed on each comment



**Likes**

A heart shaped icon is displayed on each post that allows users to click in order to like the post when the contents appeals to them or unlike the post should they wish to do so. 

A total count of the likes will be displayed on the posts so that users can see the total number of likes.

**Profiles**

Profile pages have been implemented and can be viewed by clicking on a users Avatar that is displayed on a post.

To view a users own profile, they can click their icon from the navigation menu.

If the user is the owner of the profile, they are able to edit the profile via the profile form accessed via the three dot drop down menu on the profile.

The drop down menu also allows the user to edit their user name or password by clicking the menu options and filling in the forms.

If the user is registered as an Artist. The users artist details will also be displayed on their profile page.

**Most followed profiles**

A component showing the most followed users is shown and the user profiles are able to be viewed by clicking on these. On a desktop, the most followed users has 10 users. On a mobile device this is restricted to 4 so that it does not take up too much room as scrolling may become a nuisance. A follow button will also be displayed that will allow the logged in user to follow the target user.

**Artists**

Users are able to register as an artist when they want to show users their information, such as speciality, location and hourly rate and contact details. Users may choose to follow other users who are registered Artists in order to keep up to date with their work.

Users can register as an artist via their profile page by clicking the 3 dots to open a drop down menu. Select register as artist which will direct them to a form where they can fill in their details.

Users can also unregister as an artist by selecting remove as artist button on the profile. This button is only displayed to owners of a profile.

Artist information is able to be viewed on the artists user profile. 

An average rating is diplayed based on the number of reviews and ratings that were given in the reviews. This is displayed as stars on the profile. 

A view reviews button is present on the profile page

A leave a review button is present if the user is not the owner of the profile so they can leave a review on that artist. 

An Artist page has also been implemented to allow users to view all artist details in a list.

**Artist Reviews**

Users are able to leave textual reviews on artists along with a rating out of 5 by filling in the review form that can be accessed by clicking Leave Review on the artists user profile.

A star rating component was used to allow users to easily click the number of stars they wish to give as a rating. 

Stars will light up to reflect the users rating. 

The average rating of the artist is displayed on the artist profile as an average which is calculated by getting the sum of all ratings and dividing by the number of ratings.

<br>

### Future Features

As a future feature, a messaging system will be implemented to allow users to private message artists.

As a future feature I would like to include a gallery area for each artist to show their designs and finished works of art as journeys grouped together. 
<hr>
<br>

## The Skeleton Plane

### Wireframes

## The Surface Plane

### Design

#### Colour-Scheme

The background colour for individual componenets is black (#000000).

Icon, headings and border colours are gold (#cca53c).

Main text is white (#ffffff).

The main page background colour is an off shade of white (#f8f8f8).
<hr>
<br>

#### Typography

The main font used on the website is "DM Sans".
<hr>
<br>

#### Imagery

The images on this website are user uploaded except for the logo which was taken from the royalty free stock website [istockphoto](https://www.istockphoto.com/search/search-by-asset?affiliateredirect=true&assetid=1320[…]dium=affiliate_SP&utm_source=FreeImages&utm_term=letters+bd)
<hr>
<br>

## Technologies

* React
    * Main framework used to create the user interface
* Node
    * Package manager used to install dependencies
* Eslint
    * Linting tool used in order to check best practice coding standards
* Heroku
    * Used for application hosting
* Git
    * Version control software
* Github
    * Repository used to store base code and docs

<hr>
<br>

## Testing
<hr>
<br>

## Deployment
<hr>
<br>

## Version Control

The site was created using the Visual Studio Code editor and pushed to github to the remote repository ‘body-doodles’.

The following git commands were used throughout development to push code to the remote repo:

```git add <file>``` - This command was used to add the file(s) to the staging area before they are committed.

```git commit -m “commit message”``` - This command was used to commit changes to the local repository queue ready for the final step.

```git push``` - This command was used to push all committed code to the remote repository on github.
<hr>
<br>

### Run Locally

Navigate to the GitHub Repository you want to clone to use locally:

- Click on the code drop down button
- Click on HTTPS
- Copy the repository link to the clipboard
- Open your IDE of choice (git must be installed for the next steps)
- Type git clone copied-git-url into the IDE terminal

The project will now have been cloned on your local machine for use.

Install Dependencies:

```npm install```

Run Application:

```npm start```
<hr>
<br>

### Forking

Most commonly, forks are used to either propose changes to someone else's project or to use someone else's project as a starting point for your own idea.

- Navigate to the GitHub Repository you want to fork.

- On the top right of the page under the header, click the fork button.

- This will create a duplicate of the full project in your GitHub Repository.
<hr>
<br>

## Credits

### Content

Logo used was taken from [istockphoto](https://www.istockphoto.com/search/search-by-asset?affiliateredirect=true&assetid=1320[…]dium=affiliate_SP&utm_source=FreeImages&utm_term=letters+bd)

### Acknowledgements

I'd like the thank slack user [Tom_5P](https://github.com/Tom-Ainsworth) for help with setting up eslint configs.

A special thanks to [Mr_Bim_Alumni](https://github.com/MrBim) for his help with help resolving a bug where my artist details were showing on other user profiles.






