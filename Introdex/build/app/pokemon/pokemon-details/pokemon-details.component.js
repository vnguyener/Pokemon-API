System.register(["angular2/core", "angular2/router", "../../shared/services/pokemon.service", "../../shared/pipes"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, pokemon_service_1, pipes_1;
    var PokemonDetailsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (pokemon_service_1_1) {
                pokemon_service_1 = pokemon_service_1_1;
            },
            function (pipes_1_1) {
                pipes_1 = pipes_1_1;
            }],
        execute: function() {
            PokemonDetailsComponent = (function () {
                function PokemonDetailsComponent(_pokeService, params) {
                    var _this = this;
                    this._pokeService = _pokeService;
                    this.getPokemonDetails = function (id) {
                        _this._pokeService.getPokemonDetails(id)
                            .subscribe(function (pokemon) { return _this.pokemonDetails = pokemon; }, function (error) { return _this.errorMessage = error; });
                    };
                    this.getMoves = function () {
                        return _this.pokemonDetails.moves;
                    };
                    this.id = parseInt(params.get("id"));
                }
                PokemonDetailsComponent.prototype.ngOnInit = function () {
                    this.getPokemonDetails(this.id);
                };
                PokemonDetailsComponent = __decorate([
                    core_1.Component({
                        selector: "pokemon-details",
                        templateUrl: "app/pokemon/pokemon-details/pokemon-details.component.html",
                        pipes: [pipes_1.UppercaseFirstPipe]
                    }), 
                    __metadata('design:paramtypes', [pokemon_service_1.PokeService, router_1.RouteParams])
                ], PokemonDetailsComponent);
                return PokemonDetailsComponent;
            }());
            exports_1("PokemonDetailsComponent", PokemonDetailsComponent);
        }
    }
});
