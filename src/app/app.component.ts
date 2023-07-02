import { Component } from '@angular/core';
import { FieldSettingsModel, MenuAnimationSettingsModel, MenuItemModel } from '@syncfusion/ej2-angular-navigations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'example';

  public animationSettings: MenuAnimationSettingsModel = {
    effect: 'ZoomIn',
    duration: 800
  };

  public complexData: { [key: string]: Object }[]= [
    {
        continent: 'Asia',
        countries: [
            {
                country: 'China',
                languages: [
                    { language: 'Mandarin' },
                    { language: 'Cantonese' }
                ]
            },
            {
                country: 'India',
                languages: [
                    { language: 'Hindi' },
                    { language: 'Tamil' },
                    { language: 'Telugu' }    
                ]
            },
            {
                country: 'Japan',
                languages: [
                    { language: 'Japanese' }
                ]
            }
        ]
    },
    {
        continent: 'Africa',
        countries: [
            {
                country: 'Nigeria',
                languages: [
                    { language: 'English' },
                    { language: 'Hausa' }
                ]
            },
            {
                country: 'Egypt',
                languages: [
                    { language: 'Arabic' }
                ]
            },
            {
                country: 'South Africa',
                languages: [
                    { language: 'Tswana' },
                    { language: 'Swazi' }
                ]
            }
        ]
    },
    {
        continent: 'North America',
        countries: [
            {
                country: 'Canada',
                languages: [
                    { language: 'French' }
                ]
            },
            {
                country: 'Mexico',
                languages: [
                    { language: 'Spanish' }
                ]
            },
            {
                country: 'USA',
                languages: [
                    { language: 'English' }
                ]
            }
        ]
    },
    {
        continent: 'South America',
        countries: [
            {
                country: 'Brazil',
                languages: [
                    { language: 'Portuguese' }
                ]
            },
            {
                country: 'Colombia',
                languages: [
                    { language: 'Spanish' }
                ]
            },
            {
                country: 'Argentina',
                languages: [
                    { language: 'Spanish' }
                ]
            }
        ]
    }
  ];

  public menubarDatasource: { [key: string]: Object }[]=[
    { id: 'parent1', text: 'Appliances' },
    { id: 'parent2', text: 'Accessories' },
    { id: 'parent3', text: 'Fashion' },
    { id: 'parent4', text: 'Home & Living' },
    { id: 'parent5', text: 'Entertainment' },

    { id: 'parent6', text: 'Kitchen', pId: 'parent1' },
    { id: 'parent7', text: 'Washing Machine', pId: 'parent1' },
    { id: 'parent8', text: 'Air Conditioners', pId: 'parent1' },

    { id: 'parent9', text: 'Electric Cookers', pId: 'parent6' },
    { id: 'parent10', text: 'Coffee Makers', pId: 'parent6' },
    { id: 'parent11', text: 'Blenders', pId: 'parent6' },

    { id: 'parent12', text: 'Fully Automatic', pId: 'parent7' },
    { id: 'parent13', text: 'Semi Automatic', pId: 'parent7' },

    { id: 'parent14', text: 'Inverter AC', pId: 'parent8' },
    { id: 'parent15', text: 'Split AC', pId: 'parent8' },
    { id: 'parent16', text: 'Window AC', pId: 'parent8' },

    { id: 'parent17', text: 'Mobile', pId: 'parent2' },
    { id: 'parent18', text: 'Computer', pId: 'parent2' },

    { id: 'parent19', text: 'Memory Card', pId: 'parent17' },
    { id: 'parent20', text: 'Power Bank', pId: 'parent17' },

    { id: 'parent21', text: 'Pendrive', pId: 'parent18' },
    { id: 'parent22', text: 'Monitor', pId: 'parent18' },

    { id: 'parent23', text: 'Men', pId: 'parent3' },
    { id: 'parent24', text: 'Women', pId: 'parent3' },

    { id: 'parent25', text: 'Shirts', pId: 'parent23' },
    { id: 'parent26', text: 'Jackets', pId: 'parent23' },
    { id: 'parent27', text: 'Track Suits', pId: 'parent23' },

    { id: 'parent28', text: 'Kurtas', pId: 'parent24' },
    { id: 'parent29', text: 'Salwars', pId: 'parent24' },
    { id: 'parent30', text: 'Sarees', pId: 'parent24' },

    { id: 'parent31', text: 'Furniture', pId: 'parent4' },
    { id: 'parent32', text: 'Decor', pId: 'parent4' },

    { id: 'parent33', text: 'Beds', pId: 'parent31' },
    { id: 'parent34', text: 'Mattresses', pId: 'parent31' },

    { id: 'parent35', text: 'Clocks', pId: 'parent32' },
    { id: 'parent36', text: 'Paintings', pId: 'parent32' },

    { id: 'parent37', text: 'Television', pId: 'parent5' },
    { id: 'parent38', text: 'Home Theatre', pId: 'parent5' }
  ];

  public menuDataFields: FieldSettingsModel={
  /*  text: [ 'continent', 'country', 'language' ],
    children: [ 'countries', 'languages' ] */
    itemId: 'id',
    text: 'text',
    parentId: 'pId'
  };

  public menudata: MenuItemModel[]= [
    {
      text: 'File',
      iconCss: 'em-icons e-file',
      items: [
          { text: 'Open', iconCss: 'em-icons e-open' },
          { text: 'Save', iconCss: 'em-icons e-save' },
          { separator: true},
          { text: 'Exit' }
      ]
  },
  {
      text: 'Edit',
      iconCss: 'em-icons e-edit',
      items: [
          { text: 'Cut', iconCss: 'em-icons e-cut' },
          { text: 'Copy', iconCss: 'em-icons e-copy' },
          { text: 'Paste', iconCss: 'em-icons e-paste' }
      ]
  },
  {
      text: 'View',
      items: [
          {
              text: 'Toolbars',
              items: [
                  { text: 'Menu Bar' },
                  { text: 'Bookmarks Toolbar' },
                  { text: 'Customize' },
              ]
          },
          {
              text: 'Zoom',
              items: [
                  { text: 'Zoom In' },
                  { text: 'Zoom Out' },
                  { text: 'Reset' },
              ]
          },
          { text: 'Full Screen' }
      ]
  },
  {
      text: 'Tools',
      items: [
          { text: 'Spelling & Grammar' },
          { text: 'Customize' },
          { text: 'Options' }
      ]
  },
  {
      text: 'Help'
  }    
  ];
}
