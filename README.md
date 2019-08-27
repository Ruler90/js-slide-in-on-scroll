# JS Slide In On Scroll

INFO:
1. Mamy kontener o określonej szerokości, ale może ona się dynamicznie zmieniać przy resize ekranu, dlatego operacje są wykonywane przy użyciu JS:
- przy ładowaniu strony określana jest szerokość kontenera i obiekt, który ma wjechać jest ustawiany poza konterem
- zakładając, że chcemy, żeby element (img3) wjechał z prawej strony do samego początku elementu przy scrollowaniu do odpowiedniego momentu ponownie przelicza się wielkość kontenera, żeby przesunąć obiekt w odpowiednie miejsce.

WARNING:
1. na razie bez

TO DO:
0. Spróbować jeszcze z klasami animacji nadawanymi przez JSa. Może animacja 0% left 100%, a 100% 0px? Żeby jakoś zastąpić obliczanie szerokości diva.
1. 3 obrazy w dalszych sekcjach, które wjeżdżają przy odpowiednim scrollu.
2. Dynamiczna zmiana wartości translateX na podstawie wielkości kontenera.
3. Dostosować kontenery do RWD.
4. Wyrzucić zakomentowany kod tu i z Happy Kittens
5. Publiczne repozytorium
6. Dlaczego sekcja 5 przy resize ucina obraz?
7. Pomyśleć, czy można skrócić jakoś kod js.
8. Nadać odpowiednie nazwy zdublowanym funkcjom lub zobaczyć, czy można je jakoś wykorzystać bez pisania kilka razy.

FINAL README

1. All containers (sections) have the same width so I used document.querySelector('.standardSection').clientWidth to check container width. It will dynamically change transform: translateX values for sliding in images. It doesn't matter if the width is 900px or 300px, the image will slide to the specified place in the container.