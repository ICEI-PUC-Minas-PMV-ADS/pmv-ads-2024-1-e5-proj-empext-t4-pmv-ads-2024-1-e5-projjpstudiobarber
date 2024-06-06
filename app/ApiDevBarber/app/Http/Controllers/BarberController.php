<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use App\Models\Barber;
use App\Models\BarberPhotos;
use App\Models\BarberServices;
use App\Models\BarberTestimonial;
use App\Models\BarberAvailability;


class BarberController extends Controller
{
    private $loggedUser;

    public function __construct() {
        $this->middleware('auth:api');
        $this->loggedUser = auth() ->user();
    }
    /*
    public function createRandom() {
        $array = ['error' => ''];

        for($q=0;$q<15;$q++) {
            $names = ['Rafael', 'Roger', 'Daniel', 'Maykon', 'Armando', 'Andre', 'Joao', 'Gabriel', 'Aldo', 'Sandro', 'Vitor', 'Mateus', 'Paulo', 'Pedro', 'Miguel'];
            $lastnames = ['Andrade', 'Mendes', 'Marcolino', 'Edesio', 'Silva', 'Gomes', 'Brasil', 'Siqueira', 'Souza', 'Martins', 'Fantin', 'Diniz', 'Arruda' ];

            $servicos = ['Corte', 'Pintura', 'Aparação', 'Enfeite'];
            $servicos2 = ['Cabelo', 'Unha', 'Pernas', 'Sobrancelhas'];

            $depos = [
                'Morbi diam ex, venenatis ut ligula vestibulum, laoreet molestie nisl. Praesent eros nisl, maximus vel ante ac, tempus scelerisque nulla. ',
                'Mauris non lorem sit amet odio vestibulum rutrum. Nulla pretium luctus nibh, et laoreet libero pellentesque vel.',
                'Fusce risus lacus, feugiat et pulvinar sed, pulvinar dictum nisl. Nunc sed quam ultrices, eleifend urna a, maximus ipsum',
                'Duis tincidunt, turpis eget facilisis accumsan, nunc augue accumsan enim, ac aliquet nisi nisi nec ex. Aliquam eget posuere nibh.',
                'Sed vel turpis tincidunt, commodo dui a, faucibus neque. Cras ut pellentesque leo. Ut dui augue, tincidunt sed dignissim eget, vehicula at est.'
            ];

            $newBarber = new Barber();
            $newBarber->name = $names[rand(0, count($names)-1)].' '.$lastnames[rand(0, count($lastnames)-1)];
            $newBarber ->avatar = rand(1, 4).'.png';
            $newBarber->stars = rand(2, 4).'.'.rand(0, 9);
            $newBarber->latitude = '-19.9'.rand(0,9).'12998';
            $newBarber->longitude = '-43.9'.rand(0,9).'40933';
            $newBarber->save();

            $ns = rand(3, 6);

            for($w=0;$w<4;$w++) {
                $newBarberPhoto = new BarberPhotos();
                $newBarberPhoto->id_barber = $newBarber->id;
                $newBarberPhoto->url = rand(1, 5). '.png';
                $newBarberPhoto->save();
            }

            for($w=0;$w<$ns;$w++) {
                $newBarberService = new BarberServices();
                $newBarberService->id_barber = $newBarber->id;
                $newBarberService->name = $servicos[rand(0, count($servicos)-1)].' de '.$servicos2[rand(0, count($servicos2)-1)];
                $newBarberService->price = rand(1, 99).'.'.rand(0,100);
                $newBarberService->save();
            }

            for($w=0;$w<3;$w++) {
                $newBarberTestimonial = new BarberTestimonial();
                $newBarberTestimonial->id_barber = $newBarber->id;
                $newBarberTestimonial->name = $names[rand(0, count($names)-1)].' '.$lastnames[rand(0, count($lastnames)-1)];
                $newBarberTestimonial->rate = rand(2, 4).'.'.rand(0, 9);
                $newBarberTestimonial->body = $depos[rand(0, count($depos)-1)];
                $newBarberTestimonial->save();
            }

            for($e=0;$e<4;$e++) {
                $rAdd = rand(7, 10);
                $hours = [];
                for($r=0;$r<8;$r++) {
                    $time = $r + $rAdd;
                    if($time < 10) {
                        $time = '0' .$time;
                    }
                    $hours[] = $time.':00';
                }
                $newBarberAvail = new BarberAvailability();
                $newBarberAvail->id_barber = $newBarber->id;
                $newBarberAvail->weekday = $e;
                $newBarberAvail->hours = implode(',', $hours);
                $newBarberAvail->save();
            }

        }

        return $array;
    }
    */

    public function list(Request $request) {
        $array = ['error' => ''];
        
        $barbers = Barber::all();
        
        foreach($barbers as $bkey => $bvalue) {
        $barbers[$bkey]['avatar'] = url('media/avatars/'.$barbers[$bkey]['avatar']);
        }
    
        $array['data'] = $barbers;
        $array['loc'] = 'Belo Horizonte';
    
        return $array;
    }
}
