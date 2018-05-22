const quartersArray = ['Quarter 1', 'Quarter 2', 'Quarter 3', 'Quarter 4'];

export const presets: any = [
  {
    id: 'istem',
    name: 'I-STEM Geometry Preset',
    category: 'School',
    description:
      'A preset configuration for the Wilson High School 9th Grade Geometry I-STEM classes(Periods 3-5).',
    imageURL: 'assets/images/istem-logo.png',
    data: {
      createFolders: [
        'Geometry',
        'Physics',
        'Integrated Engineering and Design'
      ],
      groups: [
        {
          destination: {
            presetID: 'Geometry'
          },
          name: 'Geometry',
          rules: [
            {
              classifier: 'title',
              constraint: 'include',
              data: {
                title: 'Geo'
              },
              name: 'Name'
            }
          ],
          source: {
            folderID: 'root',
            name: 'My Drive'
          }
        },
        {
          destination: {
            presetID: 'Physics'
          },
          name: 'Physics',
          rules: [
            {
              classifier: 'title',
              constraint: 'include',
              data: {
                title: 'Phys'
              },
              name: 'Name'
            }
          ],
          source: {
            folderID: 'root',
            name: 'My Drive'
          }
        },
        {
          destination: {
            presetID: 'Integrated Engineering and Design'
          },
          name: 'Integrated Engineering and Design',
          rules: [
            {
              classifier: 'title',
              constraint: 'include',
              data: {
                title: 'IED'
              },
              name: 'Name'
            }
          ],
          source: {
            folderID: 'root',
            name: 'My Drive'
          }
        }
      ]
    }
  }
];
