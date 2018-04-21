import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
  providers: [
    MovieProvider
  ]
})
export class FeedPage {
  public objeto_feed = {
    titulo: "Victor Borges",
    data: "November 5, 1955",
    descricao: "Retarded means slow, was he slow?",
    qntd_likes: 1000000,
    qntd_comments: 4000,
    time_comment: "1h ago"
  }

  public lista_filmes = new Array<any>();

  public nome_usuario:string = "Victor Borges"; 
  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private movieProvider: MovieProvider
    ) {
  }

  public somaDoisNumeros(num1:number, num2:number): void {
    //alert(num1 + num2);
  }

  ionViewDidLoad() {
    this.movieProvider.getLatestMovies().subscribe(
      data=>{
        const response = (data as any);
        this.lista_filmes = response.results;
        console.log(this.lista_filmes);
      }, error => {
        console.log(error);
      }
    )
  }

}
