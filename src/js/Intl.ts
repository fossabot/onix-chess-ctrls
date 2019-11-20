import { Intl as IntlCore } from 'onix-core';
import { Intl as ChessIntl } from 'onix-chess';

export class Intl {
    private static intlInitialized = false;

    public static register() {
        if (!Intl.intlInitialized) {
            
            ChessIntl.register();

            IntlCore.registerStrings('chess-ctrls', {
                'ru-ru': {
                    set_board: "Установить позицию",
                    position_label: "-- Позиция --",        
                    std_fen: "Стартовая позиция",
                    empty_fen: "Пустая доска",
                    get_fen: "Загрузить FEN",
                    paste_fen_prompt: "Скопируйте сюда собственный FEN",
                    popular_opening: "Популярные дебюты",
                },

                'en-us': {
                    set_board: "Set the board",
                    position_label: "-- Position --",
                    std_fen: "Standart start",
                    empty_fen: "Empty board",
                    get_fen: "Custom position",
                    paste_fen_prompt: "Paste FEN position",
                    popular_opening: "Popular openings"
                }
            });

            Intl.intlInitialized = true;
        }
    }    
}