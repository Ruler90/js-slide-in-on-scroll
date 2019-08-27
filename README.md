# JS Slide In On Scroll

INFO:
1. Mamy kontener o określonej szerokości, ale może ona się dynamicznie zmieniać przy resize ekranu, dlatego operacje są wykonywane przy użyciu JS:
- przy ładowaniu strony określana jest szerokość kontenera i obiekt, który ma wjechać jest ustawiany poza konterem
- zakładając, że chcemy, żeby element (img3) wjechał z prawej strony do samego początku elementu przy scrollowaniu do odpowiedniego momentu ponownie przelicza się wielkość kontenera, żeby przesunąć obiekt w odpowiednie miejsce.

WARNING:
1. Działa dziwnie, jeśli przy load element ustawi się w odpowiednim miejscu, potem robimy resize do mniejszego i scrollujemy do odpalenia przesunięcia obiektu - przesuwa się za mało. Jeśli z mniejszego resizujemy do większego, to obraz pojedzie za daleko i zniknie.
2. Co można ustawić, żeby raz "wjechany" obraz został w miejscu i był widoczny mimo resizu? Dodatkowo jeśli obraz wyjedzie przy resizie z ekranu, to przy scrollu powinien znowu wjechać, ale lepiej jakby był cały czas na miejscu. Może fixed width? Ale co z RWD?Może fixed width obrazu? I jeszcze width: 100%, height: auto?

TO DO:
1. 3 obrazy w dalszych sekcjach, które wjeżdżają przy odpowiednim scrollu.
2. Dynamiczna zmiana wartości translateX na podstawie wielkości kontenera.
3. Dostosować kontenery do RWD.
4. Wyrzucić zakomentowany kod tu i w Happy Kittens
