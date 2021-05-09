/*
Juan Uriarte Barragán 2008467
01/05/2021
auth.service.ts
*/
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'
import { User } from '../shared/user.class';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
/*
AuthService class
*/
export class AuthService {
  public isLogged: any = false;
  user: User;
  private dataURL = 'assets/data/';
  usersCollection: AngularFirestoreCollection
  /*
  Constructor
  */
  constructor(private router: Router,public afAuth: AngularFireAuth,private http: HttpClient, private database: AngularFirestore) {
    afAuth.authState.subscribe(user => (this.isLogged = user));
    this.usersCollection = database.collection<User>('users');
  }

  //login
  async onLogin (email: string, password: string){
    try{
      return await this.afAuth.signInWithEmailAndPassword(
        email, 
        password
        );
    } catch (error){
      console.log('Error on login',error);
    }

  }

  //register
  async onRegister (email: string, password: string){
    try{
      return await this.afAuth.createUserWithEmailAndPassword(
        email, 
        password
        );
    } catch (error){
      console.log('Error on register',error);
    }

  }
  /*
  Function in charge of geting the information of team project
  */
  getTeamProject() {
    return this.user.teamProject;
  }
  /*
  Function in charge of seting the information of team project
  */
  setTeamProject(teamProject: string) {
    this.user.teamProject=teamProject;
  }
  /*
  Function in charge of geting the information of personal project
  */
  getPersonalProject(){
    return this.user.personalProject;
  }
  /*
  Function in charge of seting the information of personal project
  */
  setPersonalProject(personalProject: string){
    this.user.personalProject=personalProject;
  }
  /*
  Function in charge of geting the information of extra curriculum
  */
  getExtraCurriculum(){
    return this.user.extraCurr;
  }
  /*
  Function in charge of seting the information of extra curriculum
  */
  setExtraCurriculum(extraCurr: string){
    this.user.extraCurr=extraCurr;
  }
  /*
  Function in charge of geting the information of email
  */
  getEmail(){
    return this.user.email;
  }
  /*
  Function in charge of seting the information of email
  */
  setEmail(email:string){
    this.user.email=email;
  }
  /*
  Function in charge of geting the information of tlf
  */
  getTlf(){
    return this.user.tlf;
  }
  /*
  Function in charge of seting the information of tlf
  */
  setTlf(tlf:string){
    return this.user.tlf=tlf;
  }
  /*
  Function in charge of geting the information of address
  */
  getAddress(){
    return this.user.address.street+' , '+this.user.address.city+' , '+this.user.address.state;
  }
  /*
  Function in charge of geting the information of address
  */
  setAddress(street:string,city:string,state:string){
    this.user.address.street=street;
    this.user.address.city=city;
    this.user.address.state=state;
  }
  /*
  Function in charge of geting the information of name
  */
  getName(){
    return this.user.name;
  }
  /*
  Function in charge of seting the information of name
  */
  setName(name:string){
    this.user.name=name;
  }
  /*
  Function in charge of geting the information of lastname
  */
  getLastname(){
    return this.user.lastname;
  }
  /*
  Function in charge of seting the information of lastname
  */
  setLastname(lastname:string){
    this.user.lastname=lastname;
  }
  /*
  Function in charge of geting the information of soft skills
  */
  getSoftSkills(){
    return this.user.softSkills;
  }
  /*
  Function in charge of seting the information of soft skills
  */
  setSoftSkills(softSkills:string[]){
    this.user.softSkills=softSkills;
  }
  /*
  Function in charge of geting the information of tec skills
  */
  getTecSkills(){
    return this.user.tecSkills;
  }
  /*
  Function in charge of seting the information of tec skills
  */
  setTecSkills(tecSkills:string[]){
    this.user.tecSkills=tecSkills;
  }
  getAllsSkills() {
    /**
     * Return a copy of the array of skills
    */
    return [...this.user.softSkills];
  }
  /*
  Function in charge of adding a skill to the array of skills
  */
  addsSkill(sSkills: string): boolean{
    /**
     * Adds a skill to the array if it is not already in it
     */
    if (this.user.softSkills.findIndex( (name) => name.toLocaleLowerCase() === sSkills.toLocaleLowerCase()) !== -1) {
      return false;
    }else {
      this.user.softSkills.push(sSkills);
      return true;
    }
  }
  /*
  Function in charge of deleting a skill the array of skills
  */
  deletesSkill(sSkills: string) {
    /**
     * Deletes a skill from the list of skills
     */

    const index = this.user.softSkills.findIndex( (name) => name.toLocaleLowerCase() === sSkills.toLocaleLowerCase());
    if (index !== -1) {
      this.user.softSkills.splice(index, 1);
    }
  }
  getAlltSkills() {
    /**
     * Return a copy of the array of skills
    */
    return [...this.user.tecSkills];
  }
  /*
  Function in charge of adding a skill to the array of skills
  */
  addtSkill(tSkills: string): boolean{
    /**
     * Adds a skill to the array if it is not already in it
     */
    if (this.user.tecSkills.findIndex( (name) => name.toLocaleLowerCase() === tSkills.toLocaleLowerCase()) !== -1) {
      return false;
    }else {
      this.user.tecSkills.push(tSkills);
      return true;
    }
  }
  /*
  Function in charge of deleting a skill the array of skills
  */
  deletetSkill(tSkills: string) {
    /**
     * Deletes a skill from the list of skills
     */

    const index = this.user.tecSkills.findIndex( (name) => name.toLocaleLowerCase() === tSkills.toLocaleLowerCase());
    if (index !== -1) {
      this.user.tecSkills.splice(index, 1);
    }
  }
  /*
  Function in charge of generating a user
  */
  generateUser(email: string){
    this.user={
      id: email,
      email: '',
      name: '',
      lastname: '', 
      tlf: '',
      address: {
          street: '',
          city: '',
          state: ''
      },  
      tecSkills: [],
      softSkills: [],
      personalProject: '',
      teamProject: '',
      extraCurr: ''
    };
   
    this.usersCollection.doc(email).set(this.user);
  }
  /*
  Function in charge of geting the information of the user
  */
  getUser(email: string): Observable<User>{
    return this.usersCollection.doc<User>(email).valueChanges();
  }
  /*
  Function in charge of saving the information of user
  */
  updateUser(){
    this.usersCollection.doc(this.user.id).update(this.user);
  }
  /*
  Function in charge of saving the information of user
  */
  loadUser(email: string){
    this.getUser(email).pipe(take(1)).subscribe(user=>{
      this.user=user;
      this.router.navigateByUrl('/home');
    })
  }
}
