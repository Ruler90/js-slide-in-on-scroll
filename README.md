# JS Slide In On Scroll

WARNING:
1. Nie mogę dostosować środkowych obrazów, żeby przesuwały się razem z resizem kontenera jak te dwa pierwsze (może dlatego, że te dwa pierwsze przyklejają się do krawędzi?)

TO DO:
- Spróbować jeszcze z klasami animacji nadawanymi przez JSa. Może animacja 0% left 100%, a 100% 0px? Żeby jakoś zastąpić obliczanie szerokości diva.
- Wyrzucić zakomentowany kod tu i z Happy Kittens
- Publiczne repozytorium
- Pomyśleć, czy można skrócić jakoś kod js.
- Nadać odpowiednie nazwy zdublowanym funkcjom lub zobaczyć, czy można je jakoś wykorzystać bez pisania kilka razy.

FINAL README

1. All containers (sections) have the same width so I used document.querySelector('.standardSection').clientWidth to check container width (and height the same way). It will dynamically change transform: translateX values for sliding in images. It doesn't matter if the width is 900px or 300px, the image will slide to the specified place in the container when the function will execute.
2. The least effort need the images that have the same height as the containers (300px). If img has less height than 300px, sometimes we need to stick them to one of the borders of the container.
3. Functions are runned by eventListeners - when the page is loaded, it hides all images, and then reveals them in animated way when scrollY reaches certain points.