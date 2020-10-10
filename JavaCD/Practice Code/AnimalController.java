//From Class - Wednesday, 10/7/2020 - Instructor: Matthew
public class AnimalController{
   //Entry Point method  
    public static void main(String[] args) {
        Animal shark = new Animal("Shark", "human", "ocean", 10, 10);
        Animal walrus = new Animal("Walrus", "fish", "ocean", 90, 7);


        walrus.battle(shark, "belly flop");
        System.out.println("Shark Health is now: " + shark.getHealth());

    }
}