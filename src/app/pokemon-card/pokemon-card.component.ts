import { Component, Input } from '@angular/core';
import { PokeapiserviceService } from '../pokeapiservice.service';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss']
})
export class PokemonCardComponent {
  pokemones: any[] = [];
  constructor(private apiPokemon:PokeapiserviceService)
  {
    this.obtenerPokemon();
    console.log(this.pokemones)
  }

  ngOnInit(): void {
   
  }
  
  obtenerPokemon()
  {
    this.apiPokemon.getFirePokemons().subscribe(e=>
      {
       const azar = e[Math.floor(Math.random() * (100 - 0)) + 0]
       if(azar)
       {
        this.apiPokemon.getPokemon(azar.id).subscribe(e=>{
          const obj = {name:e.name,sprite:e.sprites.front_default,tipo:'Fuego'}
          this.pokemones.push(obj);
         })
       }
      })
   this.apiPokemon.getWaterPokemons().subscribe(e=>
    {
     const azar = e[Math.floor(Math.random() * (100 - 0)) + 0]
     if(azar)
      {
       this.apiPokemon.getPokemon(azar.id).subscribe(e=>{
        const obj = {name:e.name,sprite:e.sprites.front_default,tipo:'Agua'}
         this.pokemones.push(obj);
       })
      }
     })

 this.apiPokemon.getRockPokemons().subscribe(e=>
   {
   const azar = e[Math.floor(Math.random() * (100 - 0)) + 0]
   if(azar)
   {
     this.apiPokemon.getPokemon(azar.id).subscribe(e=>{
       const obj = {name:e.name,sprite:e.sprites.front_default,tipo:'Roca'}
       this.pokemones.push(obj);
      })
    }
  })

  this.apiPokemon.getElectricPokemons().subscribe(e=>
  {
    const azar = e[Math.floor(Math.random() * (100 - 0)) + 0]
    if(azar)
    {
    this.apiPokemon.getPokemon(azar.id).subscribe(e=>{
      const obj = {name:e.name,sprite:e.sprites.front_default,tipo:'Eléctrico'}
      this.pokemones.push(obj);
     })
   }
  })

      
  }
}
