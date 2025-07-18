import { Colors } from "@constants/screen/colors"
import { ScreenConfig } from "@constants/screen/config"

export class ScreenUtils {
    static printc(text: string,x: number, y: number, color: number = Colors.RED) {
        const width = print(text, 0, -6)
        print(text, (x - width) / 2, (y - 6) / 2, color )
    }
}