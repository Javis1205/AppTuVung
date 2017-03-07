import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableHightLight,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  TextInput
} from "react-native";
import AudioPlayer from 'react-native-audioplayer';
import Swiper from 'react-native-swiper'
import { Actions} from "react-native-router-flux";
const { width } = Dimensions.get('window');
import Icon from 'react-native-vector-icons/FontAwesome';
import { Container, Content, Item, Input} from 'native-base';
export default class Home extends Component {
    playFromURL(fileName: string) {
      RNAudioPlayer.playFromURL(fileName);
    }
    render() {
     return (
       <View style={{flex:1,backgroundColor:"#E0E0E0"}}>
         <View style={{marginTop:65,alignItems:"center"}}>
           <Item style={styles.input}>
               <Icon active name='search'style={{fontSize:20,marginLeft:15}}/>
               <Input placeholder='Tìm Kiếm ...'/>
           </Item>
         </View>
         <View style={{flex:1}}>
            <View style={styles.container}>
              <View style={styles.detail}>
                <Swiper style={styles.wrapper} height={300} autoplay autoplayTimeout={8}
                  onMomentumScrollEnd={(e, state, context) => console.log('index:', state.index)}
                  dot={<View style={{backgroundColor: 'rgba(0,0,0,.2)', width: 5, height: 5, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3}} />}
                  activeDot={<View style={{backgroundColor: '#000', width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3}} />}
                  paginationStyle={{
                    bottom: -23, left: null, right: 10
                  }} loop>
                  <View style={styles.slide}>
                    <View style={styles.slide3}>
                      <Text style={styles.text}>abide by</Text>
                      <View style={{flexDirection:"row"}}>
                        <Text style={styles.text2}>/ə'baid/</Text>
                        <TouchableOpacity onPress={()=>{}}>
                          <Icon name="volume-up" style={{fontSize:20,marginTop:5}}/>
                        </TouchableOpacity>
                      </View>

                    </View>
                    <Image resizeMode='stretch' style={styles.image} source={{uri:"http://600tuvungtoeic.com/images/abide_by.jpg"}} />
                    <View>
                      <View style={styles.giaithich}>
                        <View style={{flexDirection:"row"}}>
                          <Text style={styles.Textgiaithich1}>
                            Giải Thích :
                          </Text>
                          <Text style={styles.Textgiaithich2}>
                            to accept and act according to a law, an agreement
                          </Text>
                        </View>
                        <View style={{flexDirection:"row"}}>
                          <Text style={styles.Textgiaithich1}>
                            Từ Loại :
                          </Text>
                          <Text style={styles.Textgiaithich2}>
                            (v): tôn trọng, tuân theo, giữ (lời)
                          </Text>
                        </View>
                        <View style={{flexDirection:"row"}}>
                          <Text style={styles.Textgiaithich1}>
                            Ví dụ :
                          </Text>
                          <Text style={styles.Textgiaithich2}>
                            The two parties agreed to abide by the judge's decision
                          </Text>
                        </View>
                        <View style={{flexDirection:"row"}}>
                          <Text style={styles.Textgiaithich2}>
                            Hai bên đã đồng ý tuân theo quyết định của tòa án.
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>
                  <View style={styles.slide} >
                    <View style={styles.slide3}>
                      <Text style={styles.text}>agreement</Text>

                      <View style={{flexDirection:"row"}}>
                        <Text style={styles.text2}>/ə'gri:mənt/</Text>
                        <TouchableOpacity onPress={()=>{}}>
                          <Icon name="volume-up" style={{fontSize:20,marginTop:5}}/>
                        </TouchableOpacity>
                      </View>
                    </View>
                    <Image resizeMode='stretch' style={styles.image} source={{uri:"http://www.attorneyguide.com/nevadalegalforms/wp-content/uploads/2011/07/handshake2-1024x842.jpg"}} />
                    <View>
                      <View style={styles.giaithich}>
                        <View style={{flexDirection:"row"}}>
                          <Text style={styles.Textgiaithich1}>
                            Giải Thích :
                          </Text>
                          <Text style={styles.Textgiaithich2}>
                            an arrangement, a promise or a contract made with somebody
                          </Text>
                        </View>
                        <View style={{flexDirection:"row"}}>
                          <Text style={styles.Textgiaithich1}>
                            Từ Loại :
                          </Text>
                          <Text style={styles.Textgiaithich2}>
                            (n): hợp đồng, giao kèo, sự đồng ý/thỏa thuận với nhau
                          </Text>
                        </View>
                        <View style={{flexDirection:"row"}}>
                          <Text style={styles.Textgiaithich1}>
                            Ví dụ :
                          </Text>
                          <Text style={styles.Textgiaithich2}>
                             According to the agreement, the caterer will also supply the flowers for the event
                          </Text>
                        </View>
                        <View style={{flexDirection:"row"}}>
                          <Text style={styles.Textgiaithich2}>
                            Theo như thỏa thuận, nhà cung cấp lương thực thực phẩm cũng sẽ cung cấp hoa cho sự kiện
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>
                  <View style={styles.slide} >
                    <View style={styles.slide3}>
                      <Text style={styles.text}>assurance</Text>

                      <View style={{flexDirection:"row"}}>
                        <Text style={styles.text2}>/ə'ʃuərəns/</Text>
                        <TouchableOpacity onPress={()=>{}}>
                          <Icon name="volume-up" style={{fontSize:20,marginTop:5}}/>
                        </TouchableOpacity>
                      </View>
                    </View>
                    <Image resizeMode='stretch' style={styles.image} source={{uri:"http://www.trumtuvung.com/images/1/assurance.jpg"}} />
                    <View>
                      <View style={styles.giaithich}>
                        <View style={{flexDirection:"row"}}>
                          <Text style={styles.Textgiaithich1}>
                            Giải Thích :
                          </Text>
                          <Text style={styles.Textgiaithich2}>
                            a statement that something will certainly be true or will certainly happen
                          </Text>
                        </View>
                        <View style={{flexDirection:"row"}}>
                          <Text style={styles.Textgiaithich1}>
                            Từ Loại :
                          </Text>
                          <Text style={styles.Textgiaithich2}>
                            (n): sự cam đoan, bảo đảm, chắc chắn; sự tin chắc, tự tin
                          </Text>
                        </View>
                        <View style={{flexDirection:"row"}}>
                          <Text style={styles.Textgiaithich1}>
                            Ví dụ :
                          </Text>
                          <Text style={styles.Textgiaithich2}>
                             The sales associate gave his assurance that the missing keyboard would be replaced the next day.
                          </Text>
                        </View>
                        <View style={{flexDirection:"row"}}>
                          <Text style={styles.Textgiaithich2}>
                            Đối tác bán hàng cam đoan rằng ngày mai bàn phím lỗi sẽ được thay.
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>
                  <View style={styles.slide} >
                    <View style={styles.slide3}>
                      <Text style={styles.text}>cancellation</Text>

                      <View style={{flexDirection:"row"}}>
                        <Text style={styles.text2}>/,kænse'leiʃn/</Text>
                        <TouchableOpacity onPress={()=>{}}>
                          <Icon name="volume-up" style={{fontSize:20,marginTop:5}}/>
                        </TouchableOpacity>
                      </View>
                    </View>
                    <Image resizeMode='stretch' style={styles.image} source={{uri:"http://carols-driving-school.co.uk/image/cancellation.jpg"}} />
                    <View>
                      <View style={styles.giaithich}>
                        <View style={{flexDirection:"row"}}>
                          <Text style={styles.Textgiaithich1}>
                            Giải Thích :
                          </Text>
                          <Text style={styles.Textgiaithich2}>
                             a decision to stop something that has already been arranged from happening
                          </Text>
                        </View>
                        <View style={{flexDirection:"row"}}>
                          <Text style={styles.Textgiaithich1}>
                            Từ Loại :
                          </Text>
                          <Text style={styles.Textgiaithich2}>
                            (n): sự bãi bỏ, hủy bỏ
                          </Text>
                        </View>
                        <View style={{flexDirection:"row"}}>
                          <Text style={styles.Textgiaithich1}>
                            Ví dụ :
                          </Text>
                          <Text style={styles.Textgiaithich2}>
                            The cancelation of her flight caused her problems for the rest of the week
                          </Text>
                        </View>
                        <View style={{flexDirection:"row"}}>
                          <Text style={styles.Textgiaithich2}>
                            Việc hủy chuyến bay đã gây cho cô ấy nhiều vấn đề trong những ngày còn lại của tuần
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>
                  <View style={styles.slide} >
                    <View style={styles.slide3}>
                      <Text style={styles.text}>determine</Text>

                      <View style={{flexDirection:"row"}}>
                        <Text style={styles.text2}>/di'tə:min/</Text>
                        <TouchableOpacity onPress={()=>{}}>
                          <Icon name="volume-up" style={{fontSize:20,marginTop:5}}/>
                        </TouchableOpacity>
                      </View>
                    </View>
                    <Image resizeMode='stretch' style={styles.image} source={{uri:"http://cdn2.business2community.com/wp-content/uploads/2014/10/which-path-300x223.jpg.jpg"}} />
                    <View>
                      <View style={styles.giaithich}>
                        <View style={{flexDirection:"row"}}>
                          <Text style={styles.Textgiaithich1}>
                            Giải Thích :
                          </Text>
                          <Text style={styles.Textgiaithich2}>
                            to discover the facts about something
                          </Text>
                        </View>
                        <View style={{flexDirection:"row"}}>
                          <Text style={styles.Textgiaithich1}>
                            Từ Loại :
                          </Text>
                          <Text style={styles.Textgiaithich2}>
                            (v): quyết định, xác định, định rõ; quyết tâm, kiên quyết
                          </Text>
                        </View>
                        <View style={{flexDirection:"row"}}>
                          <Text style={styles.Textgiaithich1}>
                            Ví dụ :
                          </Text>
                          <Text style={styles.Textgiaithich2}>
                             After reading the contract, I was still unable to detemine if our company was liable for back wages
                          </Text>
                        </View>
                        <View style={{flexDirection:"row"}}>
                          <Text style={styles.Textgiaithich2}>
                            Sau khi đọc hợp đồng, tôi vẫn không thể biết được liệu rằng công ty của chúng tôi có phải chịu trách nhiệm hoàn trả lại lương không
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>
                </Swiper>
              </View>
            </View>
            <View style={{alignItems:"center",marginTop:20}}>
              <TouchableOpacity onPress={()=>{Actions.danhmuc()}} style={{alignItems:"center",flexDirection:"row",padding:10,marginTop:-10,backgroundColor:"#64B5F6",borderRadius:5,width:width-10}}>
                <View style={{flexDirection:"row"}}>
                  <Icon active name='list'style={{fontSize:20,color:"#FFF"}}/>
                  <Text style={{color:"#FFF",marginLeft:10}}>
                    DANH MỤC TỪ VỰNG
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={{alignItems:"center",marginTop:20}}>
              <TouchableOpacity onPress={()=>{Actions.quatrinh()}} style={{alignItems:"center",flexDirection:"row",padding:10,marginTop:-10,backgroundColor:"#64B5F6",borderRadius:5,width:width-10}}>
                <View style={{flexDirection:"row"}}>
                  <Icon active name='pie-chart'style={{fontSize:20,color:"#FFF"}}/>
                  <Text style={{color:"#FFF",marginLeft:10}}>
                    THEO DÕI QUÁ TRÌNH HỌC TẬP
                  </Text>
                </View>
              </TouchableOpacity>
            </View>

         </View>
       </View>
     );
    }
}
const styles = {
  input:{
    height: 40, borderWidth: 1,width:width-10,borderColor: '#64B5F6',borderRadius:5,backgroundColor:"#FFF"
  },
  giaithich:{
    marginTop:-130,
    height:130,
    flex:1,
    backgroundColor:"#64B5F6",
    opacity:0.8
  },
  Textgiaithich1:{
    fontSize:14,
    color:"#FFF",
    fontWeight:"bold",
  },
  Textgiaithich2:{
    marginLeft:5,
    fontSize:13,
    color:"#FFF",
    flex:1
  },
  detail:{
    backgroundColor:"#64B5F6",
    width: width,
    alignItems:"center",
    padding:2,
    borderRadius:5
  },
  text3:{
    color:"#FFF",
    fontSize:20,
    marginBottom:5
  },
  container2: {
    backgroundColor:"#42A5F5",
    padding:3,
    alignItems:"center",
    borderTopLeftRadius:10,
    borderTopRightRadius:10,
    width,
  },
  container: {
    alignItems:"center",
    marginTop:12,

  },
  wrapper:{

  },
  container3: {
    padding:5,
    alignItems:"center",
    marginTop:10
  },
  slide: {
    borderRadius:5,
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent'
  },

  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB'
  },

  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5'
  },

  slide3: {
    marginLeft:2,
    width:width-4,
    borderTopLeftRadius:5,
    borderTopRightRadius:5,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#90CAF9'
  },

  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  },
  text2: {
    color: '#ee2211',
    fontSize: 20,
  },
  image: {
    marginLeft:4,
    width:width-8,
    flex: 3,
  }
}
