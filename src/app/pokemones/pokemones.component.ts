import { Component, OnInit } from '@angular/core';
import { PokeapiserviceService } from '../servicios/pokeapiservicios.service';

@Component({
  selector: 'app-pokemones',
  templateUrl: './pokemones.component.html',
  styleUrls: ['./pokemones.component.scss'],
})
export class PokemonesComponent implements OnInit {

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
