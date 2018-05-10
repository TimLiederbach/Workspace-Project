\c workspaces_db

INSERT INTO users
  (username, email, password)
  VALUES
  ('Harry','harry@gmail.com', 'test1'),
  ('Jane','Jane@gmail.com', 'test2'),
  ('Alex', 'alex@gmaila.com','test3');


INSERT INTO workspaces
  (creator_id, w_name, address, photo, type_of_space, power_outlets, noise_level, wifi_speed, dogfriendly, comments, overall_rating)
  VALUES
    (1, 'Brooklyn Library', '10 Grand Army Plaza, Brooklyn, NY 11238','http://files.pressible.org/267/files/2012/06/Othmer-Library.jpg', 'library', 'limited', 'quiet', 'adequate', false,'test 1 comments', 3),
    (2, 'Le Pan Quotidien', '931 Broadway, New York, NY 10010','http://www.lepainquotidien.com/wp-content/uploads/2013/10/IMG_7617.jpg', 'cafe/coffee shop', 'limited', 'buzzing', 'slow', false,'test 2 comments', 2),
    (3, 'Breukelen Coffee House', '764 Franklin Ave, Brooklyn, NY 11238','https://78.media.tumblr.com/674c96934e089228ff1a370b3b39f068/tumblr_inline_mzwttlzZ371rhilnm.jpg', 'cafe/coffee shop', 'adequate', 'buzzing', 'adequate', false,'test 3 comments', 3)

