
# Logic

the logic in here is probably something that might be useful for me one day, so I'm writing this note to remember how I did this.

 Basically the structure of this section is divided into two parts:
 - ghost containers
 - concrete containers
  Ghost containers are the ones that handle the click/hover events, while the concrete containers are the ones holding the images,
  this way it prevents some wacky behavior where the entire event handler depends on image size or what not.

  There are two states that are used inside the component, which is the activeId and the targetId, activeId is essentially the hovered
  element, while the targetId is the clicked element. The styles on these elements are stored in objects as a tailwindcss string (might
  refactor cuz it looks awful) so the component can freely render the styles based on the active and target ID

  There are 5 styling states on the components:
  - active - fired when element is hovered
  - inactive - default style
  - selected - fired on selecting an element
  - leftOfActive - fired when the left element is in `active` style state
  - rightOfActive - fired when the right element is in `active` style state

  Those are nice and dandy but the real kicker is the layouts on this, it is essentially using a relative parent with the size of
  the whole character section and used some maths to center and layout the elements accordingly
  or to be exact:
  - parent
      relative
      w-full
      h-full

      - ul
        absolute
        w-[80vw]
        h-[80vw]

        - li
          inline-block
          w-[25%]
          ...


      - ul
        absolute
        w-[80vw]
        h-[80vw]
        
        - li
          inline-block
          w-[25%]
          ...

  ### Centering the Images

  To do the centering of the group of images, I had to use transform styles in order to keep the animation on `selected` state.
  I transformed by 25% units (based from the size of li elements) from 0 - 75%, with first element having no transform styles at all.
  This gives me a centered look on the members.

  
  ### Centering the content of `selected` element

  This is quite tricky, but I just did a portions on the area inside the ul element like this:
  
  - selected element transform (puts the image on the left side)
    we used 1/8 value since we want the image to transform 1/8 units from the left
    (80vw * (1/8)) = the selected element transform

  - selected element content (width of the element from the image)

    we used 6/8 value because we are already at 1/8 unit from the left (because of image transform) and we have to use
    another 1/8 unit to have an offset on right side, so we add those units together and subtract to the whole 8/8 unit,
    which gives us 6/8 unit to multiply to our ul element width

    (80vw * (6/8)) = width of the content

  This gives us a centered look on our elements while keeping all of the potential animations. Although there are some nitty-gritty
  details that I even forgot at this point of time, the core logic is pretty much like that.


  ### Regarding about Brightness

  its a bit buggy rn, (not working properly in chrome) Im considering to refactor it.

  ### TODO

  - fix brightness