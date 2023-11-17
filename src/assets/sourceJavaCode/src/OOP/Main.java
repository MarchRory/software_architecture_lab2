package ObjectOriented;
public class Main {
    public static void main(String[] args) {
        Input input = new Input();
        input.input("E:\\软件架构实验\\text.txt");
        Shift shift = new Shift(input.getLineTxt());
        shift.shift();
        Alphabetizer alphabetizer = new Alphabetizer(shift.getKwicList());
        alphabetizer.sort();
        Output output = new Output(alphabetizer.getKwicList());
        output.output("E:\\软件架构实验\\result.txt");

    }
}

