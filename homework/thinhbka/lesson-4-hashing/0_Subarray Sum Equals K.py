from __future__ import annotations
from abc import ABC,abstractmethod


class Pet(ABC):
    @abstractmethod
    def say():
        pass
class Cat(Pet):
    def say():
        print("Cat goes: meowwww")
class Dog(Pet):
    def say():
        print("Dog goes:Go go!")
class Rabbit(Pet):
    def say():
        print("Rabbit goes:chwit chwit")
class PetFactory:
    def __init__(self) -> None:
        self.petMaker = { "Cat":Cat,"Dog":Dog,"Rabbit":Rabbit}
    
    def create(self,type):
        return self.petMaker[type]

class Client:
    def __init__(self,name,creator) -> None:
        self.name = name
        self.creator = creator
    def create(self,petName):
        self.my_pet =  self.creator.create(petName)
        self.my_pet.say()
if __name__ == "__main__":
    client = Client("Harry",PetFactory())
    client.create("Dog")
    

